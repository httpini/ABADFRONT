const {predio}= require("../database/models/index")
module.exports = {

    create: async(req,res)=>{
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
        return res.render("predios/create",{
            title: "Predios Habilitados",
            listaPredios: listaPredios,
            recentsPredios: recentsPredios,
            count:listaPredios.length
        })
    },

    
    created:async (req,res)=>{
        await predio.create(req.body)
        return res.redirect("/predios/")
    },


    edit: async (req,res)=>{
        let predios = await predio.findByPk(req.params.id, {include:{all:true}})
        if(!predios){
            res.redirect("/predios/")
        }
        return res.render("predios/edit",{
            title:"Editar Predio",
            predio: predios
        })
    },


    edited: async (req,res)=>{
        let predios = await predio.findByPk(req.params.id, {include:{all:true}})
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