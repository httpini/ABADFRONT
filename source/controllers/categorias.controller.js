const {categoria, subcategoria, equipo}= require("../database/models/index")

module.exports={
    create: async(req,res)=>{
        let listaCategorias = await categoria.findAll({
            include:[
                {
                    model: equipo,
                    as:"equipos",
                    atributes:["id"]
                }
            ],
            order:[
                ["name", "ASC"]
            ]
        })
        let listaSub = await subcategoria.findAll({
            include:[
                {
                    model:categoria,
                    as:"categoria",
                    atributes:["name"]
                }
            ],
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
        let categorias= await categoria.findByPk(req.params.id)
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
        let categorias= await categoria.findByPk(req.params.id)
        await categorias.update(req.body)
        return res.redirect("/categorias/")
    },
    destroid: async (req,res)=>{
        let categorias= categoria.findByPk(req.params.id)
        if (!categorias){
            res.redirect("/categorias/")
        }
        await subcategoria.destroy({
            where:{categoria_id:req.params.id}
        })
        await categoria.destroy({
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