const {partido}=require("../../database/models/index")
const { Op } = require('sequelize');

module.exports={
    confirmados: async(req, res)=>{
        try{
            let partidos = await partido.findAll({
                include: {all:true},
                where: {
                    [Op.or]: [
                        { estado_id: 3 },
                        { estado_id: 6 }
                    ]
                },
                order:[
                    ["dia","ASC"]
                ]
            });

            let count = partidos.count()
            

            return res.send({count: count, partidos: partidos}).status(200)

        } catch(error){
            return res.status(505).json(error)
        }
    }
}