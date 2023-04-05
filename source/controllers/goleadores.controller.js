const {equipo_torneo, torneo, goleador}= require("../database/models/index")
const {validationResult} = require('express-validator')

module.exports = {
    select: async (req,res)=>{
        let torneos = await torneo.findAll({

            order:[
                ["temporada","DESC"]
            ]
        })

        res.render("goleadores/select",{
            title: "Selecciona un torneo",
            torneos: torneos
        })
    },
    create: async(req,res)=>{
        let allGoleadores =await goleador.findAll({
            include:[
                {
                    model:torneo,
                    as:"torneo",
                    atributes:["name", "temporada"]
                },
                {
                    model:equipo_torneo,
                    as:"equipo",
                    attributes:["team_name"]
                }
            ],
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["goles","DESC"]
            ]
        })
        if(req.query && req.query.last_name){
            allGoleadores = allGoleadores.filter(goleador=> goleador.last_name.toLowerCase().indexOf(req.query.last_name.toLowerCase())> -1)
        }
        if(req.query && req.query.equipo_id){
            allGoleadores= allGoleadores.filter(goleador => goleador.equipo_id == req.query.equipo_id)
        }

        let torneos = await torneo.findByPk(req.params.torneo_id,{
        })

        let equipos = await equipo_torneo.findAll({

            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]            
        })
        let lastGoleadores=await goleador.findAll({
            include:[
                {
                    model:torneo,
                    as:"torneo",
                    atributes:["name", "temporada"]
                },
                {
                    model:equipo_torneo,
                    as:"equipo",
                    attributes:["team_name"]
                }
            ],
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["id","DESC"]
            ],
            limit:5
        })


        return res.render(`goleadores/create`,{
            title: "Goleadores",
            goleadores: allGoleadores,
            lastGoleadores: lastGoleadores,
            equipos:equipos,
            torneo:torneos
        })
    },
    created: async(req,res)=>{
        let allGoleadores =await goleador.findAll({
            include:[
                {
                    model:torneo,
                    as:"torneo",
                    atributes:["name", "temporada"]
                },
                {
                    model:equipo_torneo,
                    as:"equipo",
                    attributes:["team_name"]
                }
            ],
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["goles","DESC"]
            ]
        })
        let torneos = await torneo.findByPk(req.params.torneo_id,{
        })

        let equipos = await equipo_torneo.findAll({

            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]            
        })
        let lastGoleadores=await goleador.findAll({
            include:[
                {
                    model:torneo,
                    as:"torneo",
                    atributes:["name", "temporada"]
                },
                {
                    model:equipo_torneo,
                    as:"equipo",
                    attributes:["team_name"]
                }
            ],
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["id","DESC"]
            ],
            limit:5
        })


        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render(`goleadores/create`,{
                title: "Goleadores",
                goleadores: allGoleadores,
                lastGoleadores: lastGoleadores,
                equipos:equipos,
                torneo:torneos,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        await goleador.create(req.body)
        return res.redirect(`/goleadores/torneo/${req.params.torneo_id}`)
    },
    agregarGoles: async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
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
        return res.redirect(`/goleadores/torneo/${req.params.torneo_id}`)
    },
    edit:async(req, res) => {
        let goleadores = await goleador.findByPk(req.params.id,{
 
        })
        if(!goleadores){
            return res.redirect(`/goleadores/torneo/${req.params.torneo_id}`)
        }

        let equipos = await equipo_torneo.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]
        })
       
        return res.render("goleadores/edit",{
            title: "Editar Goleador/a",
            goleador: goleadores,
            equipos: equipos
        })
    },
    edited:async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{

        })
        if(!goleadores){
            return res.redirect(`/goleadores/torneo/${req.params.torneo_id}`)
        }
        let equipos = await equipo_torneo.findAll({
            where:{
                torneo_id:req.params.torneo_id
            },
            order:[
                ["team_name", "ASC"]
            ]
        })

        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("goleadores/edit",{
                title: "Editar Goleador/a",
                goleador: goleadores,
                equipos: equipos,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        await goleadores.update(req.body)
        return res.redirect(`/goleadores/torneo/${req.params.torneo_id}`)
        //cuando se edita un goleador, redirige a /goleadores, pero con los filtros puestos para ese jugador
    },
    destroid:async(req,res)=>{
        let goleadores = await goleador.findByPk(req.params.id,{
        })
        if(!goleadores){
            return res.redirect("/goleadores")
        }
        let torneoID= goleadores.torneo_id
        await goleadores.destroy()
        return res.redirect(`/goleadores/torneo/${torneoID}`)
    }

        
}
