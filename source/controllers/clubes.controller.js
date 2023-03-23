const {club, equipo, categoria}= require("../database/models/index")


module.exports = {
    created:async(req,res)=> {

        req.body.name_url = req.body.name.toLowerCase().replace(/\s+/g, '_');
        await club.create(req.body)

        return res.redirect ("/equipos/")
    },
    edit:async(req,res)=> {

        let clubes = await club.findByPk(req.params.id, {include:{all:true}})
        if (!clubes){
            res.redirect("/clubes/")
        }
        let equipos = await equipo.findAll({
            include:{all:true},
            where:{
                club_id:req.params.id
            },
            order:[
                ["name", "ASC"]
            ]
        })
        let categorias = await categoria.findAll({
            order: [["name", "ASC"]]
        })
        return res.render("clubes/edit",{
            title: "Editar Club",
            club: clubes,
            equipos: equipos,
            categorias: categorias
        })
    
    },
    
    edited: async (req,res)=>{
        req.body.name_url = req.body.name.toLowerCase().replace(/\s+/g, '_')
        let clubs = await club.findByPk(req.params.id)
        await clubs.update(req.body)
        return res.redirect(`/clubes/`)
    },
    list: async (req,res)=>{
        let clubes = await club.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let categorias = await categoria.findAll({
            order: [["name", "ASC"]]
        })
        return res.render("clubes/list",{
            title: "Lista de Clubes",
            clubes: clubes,
            categorias:categorias
        })
    }

}