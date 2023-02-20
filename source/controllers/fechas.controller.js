const {fecha, torneo, partido, equipo_torneo}= require("../database/models/index")

module.exports ={
    select: async (req,res)=>{
            let torneos = await torneo.findAll({
            include:{all:true}
        })

        res.render("fechas/select",{
            title: "Selecciona un torneo",
            torneos: torneos
        })
    },
    porTorneo: async (req,res)=>{
        let fechas = await fecha.findAll({
            include:{all:true},
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["nro", "ASC"]
            ]
        })
            
        let torneos = await torneo.findByPk(req.params.torneo_id,{
            include:{all:true}
        })
        
        return res.render("fechas/list",{
            title:`Fechas ${torneos.name} ${torneos.temporada}`,
            fechas:fechas,
            torneo:torneos
        })
    },
    create: async(req,res)=>{
        let torneos = await torneo.findByPk(req.params.torneo_id,{
            include:{all:true}
        })
        return res.render("fechas/create",{
            title:`Crear Fecha para ${torneos.name} ${torneos.temporada}`,
            torneo:torneos
        })

    },
    created:async (req,res)=>{

        let fechaCreada = await fecha.create({
            nro: req.body.nro,
            name: req.body.name,
            torneo_id: req.body.torneo_id,
            dia:req.body.dia
        })
        for (i=0; i<req.body.local_id.length; i++){
            datos_local = await equipo_torneo.findByPk(req.body.local_id[i],{
                include:{all:true}
            })
            console.log(datos_local)


            await partido.create({
                fecha_id: fechaCreada.id,
                dia: fechaCreada.dia,
                estado_id: 2,
                hora:datos_local.horario_local,
                predio_id: datos_local.predio_id,
                local_id: req.body.local_id[i],
                visitante_id:req.body.visitante_id[i],
                terna_id:req.body.terna_id[i] == "0"? null : req.body.terna_id[i]
                
            })
        }
        return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)

    },
    edit:async(req,res)=>{
        let fec = await fecha.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fec){
            return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)
        }
        let partidos = await partido.findAll({
            where:{
                fecha_id:fec.id
            },
            include:{all:true}
        })
        return res.render("fechas/edit",{
            title: "Editar Campos de Fair Play",
            fecha: fec,
            partidos:partidos
        })
    },
    edited: async(req,res)=>{
        let fec = await fecha.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fec){
            return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)
        }

        await fec.update(req.body)

        return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)

    },
    destroid:async(req,res)=>{
        let fec = await fecha.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fec){
            return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)
        }

        await partido.destroy({
            where:{
                fecha_id: fec.id
            }
        })
        await fec.destroy()
        return res.redirect(`/fechas/torneo/${req.params.torneo_id}`)

    }
}   