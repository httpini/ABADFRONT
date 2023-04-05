const {torneo, sancionado, equipo_torneo, fecha}= require("../database/models/index")
const {validationResult} = require('express-validator')

module.exports ={
    select: async (req,res)=>{
        let torneos = await torneo.findAll({

            order:[
                ["temporada","DESC"]
            ]
        })

        res.render("sancionados/select",{
            title: "Selecciona un torneo",
            torneos: torneos
        })
    },
    create: async(req,res)=>{
        let sancionados= await sancionado.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["f_sancion", "ASC"]
            ]
        })
        let elTorneo = await torneo.findByPk(req.params.torneo_id)
        let fechas = await fecha.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["nro", "ASC"]
            ]
        })

        let equipos = await equipo_torneo.findAll({
            include:{all:true},
            where:{
                torneo_id: req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]
        })
        
        return res.render("sancionados/create",{
            title: `Sancionados ${elTorneo.name} ${elTorneo.temporada}`,
            sancionados: sancionados,
            equipos:equipos,
            torneo:elTorneo,
            fechas:fechas
        })
    },
    created: async(req,res)=>{
        let sancionados= await sancionado.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["f_sancion", "ASC"]
            ]
        })
        let elTorneo = await torneo.findByPk(req.params.torneo_id)
        let fechas = await fecha.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["nro", "ASC"]
            ]
        })

        let equipos = await equipo_torneo.findAll({
            include:{all:true},
            where:{
                torneo_id: req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]
        })
        

        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("sancionados/create",{
                title: `Sancionados ${elTorneo.name} ${elTorneo.temporada}`,
                sancionados: sancionados,
                equipos:equipos,
                torneo:elTorneo,
                fechas:fechas,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        await sancionado.create(req.body)
        return res.redirect(`/sancionados/torneo/${req.body.torneo_id}`)
    },
    edited: async(req,res)=>{
        let oneSancionado = await sancionado.findByPk(req.params.id)
        if(!oneSancionado){
            return res.redirect(`/sancionados/torneo/${req.params.torneo_id}`)
        }
        await oneSancionado.update(req.body)
        return res.redirect(`/sancionados/torneo/${oneSancionado.torneo_id}`)
    },
    destroid: async(req,res)=>{
        let oneSancionado = await sancionado.findByPk(req.params.id)
        if(!oneSancionado){
            return res.redirect(`/sancionados/`)
        }
        let torneoID= oneSancionado.torneo_id
        await oneSancionado.destroy()
        return res.redirect(`/sancionados/torneo/${torneoID}`)
    }
    

}