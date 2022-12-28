const {predio}= require("../database/models/index")
module.exports = {

    list: async(req,res)=>{
        let predios = await predio.findAll({
            include: {all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        return res.render("predios/list",{
            title: "Predios Habilitados",
            predios: predios
        })
    },



    create:(req,res)=>{
        return res.render("predios/create",{
            title: "Crear Predio"

        })
    },

    
    created:async (req,res)=>{
        await predio.create(req.body)
        return res.redirect("/predios/")
    },


    edit: async (req,res)=>{
        let predio = await predio.findByPk(req.params.id, {include:{all:true}})
        if(!predio){
            res.redirect("/predios/")
        }
        return res.render("predios/edit",{
            title:"Editar Predio",
            predio: predio
        })
    },


    edited: async (req,res)=>{
        let predio = await predio.findByPk(req.params.id, {include:{all:true}})
        await predio.update(req.body)
        return res.redirect("/predios/")
    },


    destroid: async (req,res)=>{
        let predio = await predio.findByPk(req.params.id, {include:{all:true}})
        if(!predio){
            res.redirect("/predios/")
        }
        await predio.destroy()
        return res.redirect("/predios/")
    }
}