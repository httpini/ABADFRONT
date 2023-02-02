const {categoria,subcategoria,equipo,torneo}=require("../../database/models/index")

module.exports={
    allCategorias:async(req,res)=>{
        try{
            let categorias = categoria.findAll({
                include:{all:true},
                order:[
                    ["name", "ASC"]
                ]
            })
            categorias = categorias.map(c=>{
                let data = {
                    id:c.id,
                    name:c.name
                }
                return data
            })

            return res.send({categorias:categorias}).status(200)
        } catch(error){
            return res.status(505).json(error)
        }
    },
    allSubCategorias:async(req,res)=>{
        try{
            let  subcategorias =  subcategoria.findAll({
                include:{all:true},
                order:[
                    ["categoria_id","ASC"],
                    ["name", "ASC"]
                ]
            })
            return res.send({subcategorias}).status(200)
        } catch(error){
            return res.status(505).json(error)
        }
    },
    allEquipos:async(req,res)=>{
        try{
            let  equipos =  equipo.findAll({
                include:{all:true},
                order:[
                    ["categoria_id","ASC"],
                    ["name", "ASC"]
                ]
            })
            return res.send({equipos}).status(200)
        } catch(error){
            return res.status(505).json(error)
        }
    }
}
