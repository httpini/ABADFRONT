const {torneo, categoria, subcategoria, equipo}=require("../database/models/index")

module.exports={
    create: async (req,res)=>{
        let torneos = await torneo.findAll({
            include:{all:true},
        })
        let equipos = await equipo.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let categorias = await categoria.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let subcategorias = await subcategoria.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })


    }
}