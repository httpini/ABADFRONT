const {predio}= require("../database/models/index")
const {validationResult} = require('express-validator')
module.exports = {

    create: async(req,res)=>{
        let listaPredios = await predio.findAll({ //TRAEMOS LA LISTA DE PREDIOS POR ORDEN ALFABETICO
            order:[
                ["name", "ASC"]
            ]
            
        })
        let recentsPredios = await predio.findAll({ //TRAEMOS LOS ULTIMOS 3 PREDIOS CREADOS
            order:[
                ["id", "DESC"]
            ],
            limit:3
        })
        return res.render("predios/create",{
            title: "Predios Habilitados",
            listaPredios: listaPredios,
            recentsPredios: recentsPredios,
            count:listaPredios.length
        })
    },

    
    created:async (req,res)=>{
        let listaPredios = await predio.findAll({ //TRAEMOS LA LISTA DE PREDIOS POR ORDEN ALFABETICO
            include: {all:true},
            order:[
                ["name", "ASC"]
            ]
            
        })
        let recentsPredios = await predio.findAll({ //TRAEMOS LOS ULTIMOS 3 PREDIOS CREADOS
            include: {all:true},
            order:[
                ["id", "DESC"]
            ],
            limit:3
        })
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render ("predios/create",{
                title: "Predios Habilitados",
                listaPredios: listaPredios,
                recentsPredios: recentsPredios,
                count:listaPredios.length,
                oldData: req.body,
                errors:validaciones.mapped()
          })
      }
        await predio.create(req.body)
        return res.redirect("/predios/")
    },


    edit: async (req,res)=>{
        let predios = await predio.findByPk(req.params.id)
        if(!predios){
            res.redirect("/predios/")
        }
        return res.render("predios/edit",{
            title:`Editar Predio ${predios.name}`,
            predio: predios
        })
    },


    edited: async (req,res)=>{
        let predios = await predio.findByPk(req.params.id, {include:{all:true}})
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render ("predios/edit",{
                title:`Editar Predio ${predios.name}`,
                predio: predios,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        
        await predios.update(req.body)
        return res.redirect("/predios/")
    },


    destroid: async (req,res)=>{
        let predios = await predio.findByPk(req.params.id, {include:{all:true}})
        if(!predios){
            res.redirect("/predios/")
        }
        await predios.destroy()
        return res.redirect("/predios/")
    }
}