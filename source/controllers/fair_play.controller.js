const {fair_play, torneo, equipo}= require("../database/models/index")

module.exports ={
    select: async (req,res)=>{
        let torneos = await torneo.findAll({
            include:{all:true}
        })

        res.render("fair_play/select",{
            title: "Selecciona un torneo",
            torneos: torneos
        })
    },
    porTorneo: async (req,res)=>{
        let fair_plays = await fair_play.findAll({
            include:{all:true},
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["puntos", "ASC"]
            ]
        })
        if(!fair_plays){
            return res.redirect("/fair-play")
        }
        let torneos = await torneo.findByPk(req.params.torneo_id,{
            include:{all:true}
        })
        
        return res.render("fair_play/list",{
            title:`Fair Play ${torneos.name} ${torneos.temporada}`,
            fair_play:fair_plays,
            torneo:torneos
        })
    },
    agregarTarjetas: async(req,res)=>{
        let fp = await fair_play.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fp){
            return res.redirect("/fair-play")
        }
        console.log(fp.amarillas)
        console.log(req.body.amarillas)
        
        let totalAmarillas = parseInt(fp.amarillas) + parseInt(req.body.amarillas)
        let totalRojas = parseInt(fp.rojas) + parseInt(req.body.rojas)
        let totalAmon = parseInt(fp.amonestaciones) + parseInt(req.body.amonestaciones)
        let totalPuntos = totalAmarillas + totalRojas + totalRojas

        let totalMotivos = fp.motivos_amon + `

        ${req.body.motivos_amon}`
        await fp.update({
            amarillas: totalAmarillas,
            rojas: totalRojas,
            amonestaciones: totalAmon,
            motivos_amon: totalMotivos,
            puntos:totalPuntos
        })
        return res.redirect(`/fair-play/torneo/${fp.torneo_id}`)
    },
    edit:async(req,res)=>{
        let fp = await fair_play.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fp){
            return res.redirect("/fair-play")
        }
        console.log(fp)
        return res.render("fair_play/edit",{
            title: "Editar Campos de Fair Play",
            fair_play: fp
        })
    },
    edited: async(req,res)=>{
        let fp = await fair_play.findByPk(req.params.id,{
            include:{all:true}
        })
        if(!fp){
            return res.redirect("/fair-play")
        }
        req.body.puntos = parseInt(req.body.amarillas) + parseInt(req.body.rojas) + parseInt(req.body.rojas)
        await fp.update(req.body)

        return res.redirect(`/fair-play/torneo/${fp.torneo_id}`)

    },
}   