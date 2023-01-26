const {categoria, subcategoria}= require("../database/models/index")

module.exports={
    create: async(req,res)=>{
        let listaCategorias = await categoria.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let listaSub = await subcategoria.findAll({
            include:{all:true},
            order:[
                ["categoria_id", "ASC"],
                ["name", "ASC"]
            ]
        })
        
        return res.render("categorias/create",{
            title: "Categorias",
            categorias: listaCategorias,
            subcategorias:  listaSub
        })
    },
    edit: async(req, res)=>{
        let categorias= await categoria.findByPk(req.params.id,{include:{all:true}})
        if (!categorias){
            res.redirect("/categorias/")
        }
        return res.render("categorias/edit",{
            title:"Editar Categoria",
            categoria: categorias
        })
    },
    created:async (req,res)=>{
        await categoria.create(req.body)
        return res.redirect("/categorias/")
    },
    edited: async(req,res)=>{
        let categorias= await categoria.findByPk(req.params.id,{include:{all:true}})
        await categorias.update(req.body)
        return res.redirect("categorias/")
    },
    destroid: async (req,res)=>{
        let categorias= categoria.findByPk(req.params.id,{include:{all:true}})
        if (!categorias){
            res.redirect("/categorias/")
        }
        await categoria.destroy({
            include:{all:true},
            where:{id:req.params.id}
        })
       
        res.redirect("/categorias/")
    },
    allCategorias: async (req,res)=>{
        let listaCategorias = await categoria.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        return res.send(listaCategorias)
    }



}