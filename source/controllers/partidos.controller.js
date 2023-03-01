const {partido, terna, torneo, fecha, equipo_torneo}= require("../database/models/index")

/*al momento de editar el partido, debemos restar el partido ganado/empatado/perdido de la tabla, restar los goles en contra y los goles a favor, y rehacer el calculo de partidos jugados, puntos y diferencia de gol.
Para luego volver a sumar con los datos del partido actualizado

Lo mismo cuando eliminamos un partido deberiamos restar todo lo que mencione anteriormente
*/
module.exports= {
    select: async (req,res)=>{
        let torneos = await torneo.findAll({
        include:{all:true}
        })

        return res.render("partidos/select",{
        title: "Selecciona un torneo",
        torneos: torneos
        })
    },
    partido: async (req, res)=>{
        let partidos = await partido.findAll({include:{all:true}})
        return res.send(partidos)

    },

} 