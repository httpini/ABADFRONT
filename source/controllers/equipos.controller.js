const {categoria, equipo}= require("../database/models/index")


module.exports = {
    create: async (req,res) =>{
       
        let listaEquipos = await equipo.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        if(req.query && req.query.name){
            listaEquipos = listaEquipos.filter(equipo=> equipo.name.toLowerCase().indexOf(req.query.name.toLowerCase())> -1)
        }
        if(req.query && req.query.cat){
            listaEquipos= listaEquipos.filter(equipo => equipo.categoria_id == req.query.cat)
        }
        
        let recentsEquipos = await equipo.findAll({
            include: {all:true},
            order:[
                ["id", "DESC"]
            ],
            limit:3
        })
        let listaCategorias = await categoria.findAll({
            include: {all:true},
            order:[
                ["name", "ASC"]
            ]
        })

        return res.render ("equipos/create",{
            title: "Equipos Asociados",
            listaEquipos: listaEquipos,
            recentsEquipos: recentsEquipos,
            categorias: listaCategorias,
            count:listaEquipos.length
        })
    },
    created:async(req,res)=> {
        equipo.create(req.body)

        return res.redirect("/equipos/")

    },
    edit:async(req,res)=> {
        let equipos = await equipo.findByPk(req.params.id, {include:{all:true}})
        if (!equipos){
            res.redirect("/equipos/")
        }
        return res.render("/equipos/edit",{
            title: "Editar Equipo",
            euqipo:equipos
        })
    },
    edited: async (req,res)=>{
        let equipos = await equipo.findByPk(req.params.id, {include:{all:true}})
        await equipos.update(req.body)
        return res.redirect("/equipos/")
    },
    destroid: async(req,res)=>{
        let equipos = await equipo.findByPk(req.params.id, {include:{all:true}})
        if(!equipos){
            res.redirect("/equipos/")
        }
        await equipos.destroy()
        return res.redirect("/equipos")
    }

}