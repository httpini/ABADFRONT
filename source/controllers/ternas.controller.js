const {terna, partido, estado_partido}= require("../database/models/index")
const {validationResult} = require('express-validator')

module.exports={
    create: async(req,res)=>{
        let listaTernas = await terna.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let recentTernas=await terna.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ],
            limit: 3
        })
        
        
        return res.render("ternas/create",{
            title: "Ternas",
            ternas: listaTernas,
            recentTernas:recentTernas
        })
    },
    edit: async(req, res)=>{
        let ternas= await terna.findByPk(req.params.id,{include:{all:true}})
        if (!ternas){
            res.redirect("/ternas/")
        }
        return res.render("ternas/edit",{
            title:`Editar Terna ${ternas.name}`,
            terna: ternas
        })
    },
    created:async (req,res)=>{
        let listaTernas = await terna.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let recentTernas=await terna.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ],
            limit: 3
        })

        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("ternas/create",{
                title: "Ternas",
                ternas: listaTernas,
                recentTernas:recentTernas,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        await terna.create(req.body)
        return res.redirect("/ternas/")
    },
    edited: async(req,res)=>{

        let ternas= await terna.findByPk(req.params.id,{include:{all:true}})
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("ternas/edit",{
                title:`Editar Terna ${ternas.name}`,
                terna: ternas,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        await ternas.update(req.body)
        return res.redirect("/ternas/")
    },
    destroid: async (req,res)=>{
        let ternas= terna.findByPk(req.params.id,{include:{all:true}})
        if (!ternas){
            res.redirect("/ternas/")
        }
        await terna.destroy({
            include:{all:true},
            where:{id:req.params.id}
        })
       
        res.redirect("/ternas/")
    },
    allTernas: async (req,res)=>{
        let listaTernas = await terna.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        return res.send(listaTernas)
    },
    detail: async (req,res)=>{
        let oneTerna = await terna.findByPk(req.params.id,{
            include:{all:true}
        })
        if (!oneTerna){
            res.redirect("/ternas/")
        }
        let partidos = await partido.findAll({
            include:{all:true},
            where:{
                terna_id:req.params.id
            }
        })
        let estados = await estado_partido.findAll({include:{all:true}})

        if(req.query && req.query.temporada){
            partidos = partidos.filter( partido=>{
                return partido.dia.getFullYear() == req.query.temporada
            })
        }
        if(req.query && req.query.mes){
            partidos = partidos.filter( partido=>{
                return partido.dia.getMonth() + 1 == req.query.mes
            })
        }
        if(req.query && req.query.estado){
            partidos = partidos.filter( partido=>{
                return partido.estado_id== req.query.estado
            })
        }

        return res.render("ternas/detail",{
            title: oneTerna.name,
            terna:oneTerna,
            partidos: partidos,
            estados:estados
        })

        // BUSCO LOS PARTIDOS Y FILTRO DEPENDIENDO LOS FILTROS DEL REQ QUERY
    }



}