const {delegado, equipo, categoria} = require("../database/models/index")
const {validationResult} = require('express-validator')


module.exports ={
    create: async (req,res)=>{
        let delegadosList =await delegado.findAll({
            include: {all:true},
            order:[
                ["last_name", "ASC"],
                ["name", "ASC"]
            ]
        })

        if(req.query && req.query.name){
            delegadosList = delegadosList.filter(d=> d.name.toLowerCase().indexOf(req.query.name.toLowerCase())> -1)
        }
        if(req.query && req.query.cat){
            delegadosList= delegadosList.filter(d => d.categoria_id == req.query.cat)
        }
        if(req.query && req.query.tim){
            delegadosList= delegadosList.filter(d => d.equipo_id == req.query.tim)
        }
        
        let equipos = await equipo.findAll({
            include: {all:true},
            order:[
                ["name", "ASC"]
            ]})
        let recentsDelegados = await delegado.findAll({
            include: {all:true},
            order:[
                ["id", "DESC"]
            ],
            limit:3
        })
       
        let categorias =await categoria.findAll({
            order:[
                ["name", "ASC"]
            ]
        })
        
    return res.render("delegados/create",{
        title: "Delegados",
        delegados: delegadosList,
        equipos: equipos,
        categorias: categorias,
        recentsDelegados:recentsDelegados,
        count:delegadosList.length,
    })
    },
    created: async (req,res)=>{
        let delegadosList =await delegado.findAll({
            include: {all:true},
            order:[
                ["last_name", "ASC"],
                ["name", "ASC"]
            ]
        })

        if(req.query && req.query.name){
            delegadosList = delegadosList.filter(d=> d.name.toLowerCase().indexOf(req.query.name.toLowerCase())> -1)
        }
        if(req.query && req.query.cat){
            delegadosList= delegadosList.filter(d => d.categoria_id == req.query.cat)
        }
        if(req.query && req.query.tim){
            delegadosList= delegadosList.filter(d => d.equipo_id == req.query.tim)
        }
        
        let equipos = await equipo.findAll({
            include: {all:true},
            order:[
                ["name", "ASC"]
            ]})
        let recentsDelegados = await delegado.findAll({
            include: {all:true},
            order:[
                ["id", "DESC"]
            ],
            limit:3
        })
       
        let categorias =await categoria.findAll({
            order:[
                ["name", "ASC"]
            ]
        })
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("delegados/create",{
                title: "Delegados",
                delegados: delegadosList,
                equipos: equipos,
                categorias: categorias,
                recentsDelegados:recentsDelegados,
                count:delegadosList.length,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }


        let equipocat=await equipo.findByPk(req.body.equipo_id)
        req.body.categoria_id = equipocat.categoria_id
        delegado.create(req.body)
        return res.redirect("/delegados/")
    },
    edit: async (req, res)=>{
        let equipos =await equipo.findAll({
            include:[
                {
                    model:categoria,
                    as:"categoria",
                    atributes:["name"]
                }
            ],
            order:[
                ["name", "ASC"]
            ]
        })
        let delegados = await delegado.findByPk(req.params.id, {include: {all:true}})
        if (!delegados){
            res.redirect("/delegados/")
        }
        return res.render("delegados/edit",{
            title:`Editar Delegado ${delegados.name} ${delegados.last_name}`,
            delegado:delegados,
            equipos:equipos
        })
    },
    edited: async (req,res)=>{
        let delegados = await delegado.findByPk(req.params.id, {include: {all:true}})
        let equipos =await equipo.findAll({
            include:[
                {
                    model:categoria,
                    as:"categoria",
                    atributes:["name"]
                }
            ],
            order:[
                ["name", "ASC"]
            ]
        })
        let validaciones = validationResult(req)
        let {errors} = validaciones
        if(errors && errors.length > 0){
            return res.render("delegados/edit",{
                title:`Editar Delegado ${delegados.name} ${delegados.last_name}`,
                delegado:delegados,
                equipos:equipos,
                oldData: req.body,
                errors:validaciones.mapped()
          })
        }
        let equipocat=await equipo.findByPk(req.body.equipo_id, {
            include: {all:true},
        })
        req.body.categoria_id = equipocat.categoria_id
        await delegados.update(req.body)
        return res.redirect("/delegados/")
    },
    destroid:async (req, res)=>{
        let delegados = await delegado.findByPk(req.params.id)
        if (!delegados){
            res.redirect("/delegados/")
        }
        await delegados.destroy()
        return res.redirect("/delegados/")
    }
}