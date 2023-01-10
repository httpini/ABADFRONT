const {categoria, subcategoria}= require("../database/models/index")

module.exports = {
    created: async (req,res)=>{
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
    }
}