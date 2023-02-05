const {equipo, torneo, goleador}= require("../database/models/index")

module.exports = {

    create: async(req,res)=>{
        let allGoleadores =await goleador.findAll({
            include: {all:true},
            order:[
                ["torneo_id", "DESC"],
                ["goles","DESC"]
            ]
        })
        if(req.query && req.query.last_name){
            allGoleadores = allGoleadores.filter(goleador=> goleador.last_name.toLowerCase().indexOf(req.query.last_name.toLowerCase())> -1)
        }
        if(req.query && req.query.torneo_id){
            allGoleadores= allGoleadores.filter(goleador => goleador.torneo_id == req.query.torneo_id)
        }
        if(req.query && req.query.equipo_id){
            allGoleadores= allGoleadores.filter(goleador => goleador.equipo_id == req.query.equipo_id)
        }

        let torneos = await torneo.findAll({
            include:{all:true},
            order:[
                ["id", "DESC"]
            ]
        })

        let equipos = await equipo.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let lastGoleadores=await goleador.findAll({
            include:{all:true},
            order:[
                ["id","DESC"]
            ],
            limit:5
        })


        return res.render("goleadores/create",{
            title: "Goleadores",
            goleadores: allGoleadores,
            lastGoleadores: lastGoleadores,
            equipos:equipos,
            torneos:torneos
        })
    },
    created: async(req,res)=>{
        await goleador.create(req.body)
    return res.redirect("/goleadores")
    },
    agregarGoles: async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        let golesActuales = parseInt(goleadores.goles)
        let agregar = parseInt(req.body.add)
        let resultado =  golesActuales + agregar

        await goleadores.update({
            goles:resultado
        }
        )
        return res.redirect("/goleadores")
    },
    quitarGoles: async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        let golesActuales = parseInt(goleadores.goles)
        let quitar = parseInt(req.body.less)
        let resultado = golesActuales - quitar

        await goleadores.update({
            goles:resultado
        }
        )
        return res.redirect("/goleadores")
    },
    edit:async(req, res) => {
        let goleadores = await goleador.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        
        let torneos = await torneo.findAll({
            include:{all:true},
            order:[
                ["id", "DESC"]
            ]
        })

        let equipos = await equipo.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
       
        return res.render("goleadores/edit",{
            title: "Editar Goleador/a",
            goleador: goleadores,
            torneos: torneos,
            equipos: equipos
        })
    },
    edited:async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        await goleadores.update(req.body)
        return res.redirect(`/goleadores/?torneo_id=${goleadores.torneo_id}&equipo_id=${goleadores.equipo_id}&last_name=${goleadores.last_name}`)
        //cuando se edita un goleador, redirige a /goleadores, pero con los filtros puestos para ese jugador
    },
    destroid:async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        await goleadores.destroy()
        return res.redirect("/goleadores")
    }

        
}
