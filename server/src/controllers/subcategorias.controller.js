const {categoria, subcategoria, equipo}= require("../database/models/index")
const {validationResult} = require('express-validator')


module.exports = {
    created: async (req,res)=>{
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
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render ("categorias/create",{
                title: "Categorias",
                categorias: listaCategorias,
                subcategorias:  listaSub,
                oldDataSub: req.body,
                errorsSub:validaciones.mapped()
          })
        }
        await subcategoria.create(req.body)
        return res.redirect("/categorias/")

    },
    edit: async (req,res)=>{
        let categorias = await categoria.findAll({include:{all:true}})
        let subcategorias = await subcategoria.findByPk(req.params.id, {include:{all:true}})
        if (!subcategorias){
            res.redirect("/categorias/")
        }
        return res.render("subcategorias/edit",{
            title: "Editar Subcategoria",
            subcategoria: subcategorias,
            categoria: categorias
        })
    },


    edited: async (req,res)=>{
        let subcategorias = await subcategoria.findByPk(req.params.id, {include:{all:true}})
        await subcategorias.update(req.body)
        return res.redirect("/categorias/")
    },
    destroid: async (req,res)=>{
        let subcategorias = await subcategoria.findByPk(req.params.id, {include:{all:true}})
        if (!subcategorias){
            res.redirect("/categorias/")
        }
        await subcategoria.destroy({
            include:{all:true},
            where:{id:req.params.id}
        })
        res.redirect("/categorias/")
    },
    allSubCategorias: async (req,res)=>{
        let listaSubCategorias = await subcategoria.findAll({
            order:[
                ["categoria_id", "ASC"],
                ["name", "ASC"]
            ]
        })
        return res.send(listaSubCategorias)
    }
}