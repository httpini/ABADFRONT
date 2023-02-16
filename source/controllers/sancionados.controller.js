const {equipo, torneo, sancionado}= require("../database/models/index")

module.exports ={
    create: async(req,res)=>{
        let allSancionados= await sancionado.findAll({
            include:{all:true}
        })
        //FALTAN LOS QUERYS DE LOS FILTROS Y EL ORDER
        let torneos = await torneo.findAll({
            include:{all:true},
            order:[
                ["id", "DESC"]
            ]
        })

        let equipos = await equipo.findAll({
            include:{all:true},
            order:[
                ["name", "ASC"]
            ]
        })
        let lastSancionados=await sancionado.findAll({
            include:{all:true},
            order:[
                ["id","DESC"]
            ],
            limit:5
        })
        return res.render("sancionados/create",{
            title: "Sancionados",
            sancionados: allSancionados,
            lastSancionados: lastSancionados,
            equipos:equipos,
            torneos:torneos
        })
    }
    

}