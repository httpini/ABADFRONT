const {partido, terna, torneo, fecha, equipo_torneo, estado_partido, predio, equipo}= require("../database/models/index")
const{actualizar,restablecer}= require("../modules/actualizarTabla")

/*al momento de editar el partido, debemos restar el partido ganado/empatado/perdido de la tabla, restar los goles en contra y los goles a favor, y rehacer el calculo de partidos jugados, puntos y diferencia de gol.
Para luego volver a sumar con los datos del partido actualizado

Lo mismo cuando eliminamos un partido deberiamos restar todo lo que mencione anteriormente
*/
module.exports= {
    select: async (req,res)=>{
        let torneos = await torneo.findAll({
    
        })

        return res.render("partidos/select",{
        title: "Selecciona un torneo",
        torneos: torneos
        })
    },
    porTorneo: async (req,res)=>{
        let partidos = await partido.findAll({
            include:[
                {
                    model: fecha,
                    as:"fecha",
                    atributes:["name"]
                },
                {
                    model:terna,
                    as:"terna",
                    atributes:["name"]
                },
                {
                    model:equipo_torneo,
                    as:"local",
                    atributes:["team_name"]
                },
                {
                    model:equipo_torneo,
                    as:"visitante",
                    atributes:["team_name"]                
                },
                {
                    model:predio,
                    as:"predio",
                    atributes:["name"]
                },
                {
                    model:estado_partido,
                    as:"estado",
                    atributes:["name"]
                }
            ],
            order:[
                ["dia", "DESC"]
            ]
        })

        partidos = partidos.filter(partido=>{
           return partido.fecha.torneo_id == req.params.torneo_id
        })

        if(req.query && req.query.fecha_id){
            partidos = partidos.filter(p=> {
                return p.fecha_id == req.query.fecha_id
            })
        }
        if(req.query && req.query.equipo){

            let elEquipo= await equipo_torneo.findOne({
                where:{
                    equipo_id: req.query.equipo,
                    torneo_id:req.params.torneo_id
                }
            })
            partidos = partidos.filter(p=>{
                return p.local_id == elEquipo.id || p.visitante_id==elEquipo.id
            })
        }
        if(req.query && req.query.estado){
            partidos = partidos.filter(p=>{
              return  p.estado_id == req.query.estado
            })
        }
        if(req.query && req.query.terna){
            partidos = partidos.filter(p=>{
             return p.terna_id == req.query.terna
            })
        }
        if(req.query && req.query.predio){
            partidos = partidos.filter(p=>{
              return p.predio_id == req.query.predio
            })
        }
        let estados = await estado_partido.findAll()
        let ternas = await terna.findAll({
            order:[
                ["name", "ASC"]
            ]
        })
        let predios = await predio.findAll({
            order:[
                ["name", "ASC"]
            ]
        })
        let fechas = await fecha.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["nro", "ASC"]
            ]
        })

        let torneos = await torneo.findByPk(req.params.torneo_id,{
            include:[
                {
                    model:equipo,
                    as:"equipos",
                    atributes:["name","id"]
                }
            ]
        })
        
        return res.render("partidos/list",{
            title:`Partidos ${torneos.name} ${torneos.temporada}`,
            partidos:partidos,
            torneo:torneos,
            fechas:fechas,
            estados:estados,
            ternas:ternas,
            predios:predios,
        })
    },
    partido: async (req, res)=>{
        let partidos = await partido.findAll({include:{all:true}})
        return res.send(partidos)
    },
    edit: async(req,res)=>{
        let elPartido = await partido.findByPk(req.params.id,{include:{all:true}})
        if(!elPartido){
            return res.redirect(`/partidos/torneo/${req.params.torneo_id}`)
        }
        let ternas= await terna.findAll({
            include:{all:true},
            order:[
                ["name","ASC"]
            ]
        })
        let fechas= await fecha.findAll({
            include:{all:true},
            order:[
                ["nro","ASC"]
            ]
        })
        let predios= await predio.findAll({
            include:{all:true},
            order:[
                ["name","ASC"]
            ]
        })
        let estados = await estado_partido.findAll({
            include:{all:true},

        })

        return res.render("partidos/edit",{
            title: "Editar Partido",
            p:elPartido,
            ternas:ternas,
            fechas:fechas,
            predios:predios,
            estados:estados

        })
    },
    edited: async(req,res)=>{
        let elPartido = await partido.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!elPartido){
            //NO SE PUEDE ASI
            
            return res.redirect(`/fechas/torneo/${laFecha.torneo_id}/edit/${laFecha.id}`)
        }
        let laFecha= await fecha.findByPk(elPartido.fecha_id,{
            include:{all:true}
        })

        let elPartidoAntes= elPartido
        //HAY QUE TRAER LA TABLA DE EQUIPOS_TORNEOS, DONDE SE VAN A ACTUALIZAR LOS DATOS REFERENTES A LA TABLA DE POSICIONES
        let local = await equipo_torneo.findByPk(elPartidoAntes.local_id)
        let visitante = await equipo_torneo.findByPk(elPartidoAntes.visitante_id)

        restablecer(local, visitante, elPartidoAntes)
        await local.save()
        await visitante.save()

        await elPartido.update({
            
            fecha_id: !req.body.fecha_id? elPartido.fecha_id: req.body.fecha_id,
            torneo_id: laFecha.torneo_id,
            hora: req.body.hora,
            dia:req.body.dia,
            predio_id:req.body.predio_id,
            terna_id:req.body.terna_id,
            local_id:!req.body.local_id? elPartido.local_id: req.body.local_id,
            visitante_id:!req.body.visitante_id? elPartido.visitante_id: req.body.visitante_id,
            estado_id:req.body.estado_id,
            motivo_postergado:req.body.motivo_postergado,
            g_local: req.body.g_local,
            g_visitante: req.body.g_visitante

        })

        let elPartidoDespues = elPartido

        let localDespues = await equipo_torneo.findByPk(elPartidoDespues.local_id)
        let visitanteDespues = await equipo_torneo.findByPk(elPartidoDespues.visitante_id)

        actualizar(localDespues,visitanteDespues,elPartidoDespues)

        await localDespues.save()
        await visitanteDespues.save()



        let laFechaDsp = await fecha.findByPk(elPartidoDespues.fecha_id,{
            include:{all:true}
        })

        return res.redirect(`/fechas/torneo/${laFechaDsp.torneo_id}/edit/${laFecha.id}`)

    },
    destroid: async(req,res)=>{
        let elPartido = await partido.findByPk(req.params.id,{
            include:{all:true}
        })
        
        if(!elPartido){
            return res.redirect(`/partidos/torneo/${req.params.torneo_id}/edit/${laFecha.id}`)
        }

        let laFecha= await fecha.findByPk(elPartido.fecha_id,{
            include:{all:true}
        })
        let local = await equipo_torneo.findByPk(elPartido.local_id)
        let visitante = await equipo_torneo.findByPk(elPartido.visitante_id)

        restablecer(local,visitante,elPartido)
        await local.save()
        await visitante.save()

        await elPartido.destroy()
        return res.redirect(`/fechas/torneo/${laFecha.torneo_id}/edit/${laFecha.id}`)

    }

} 