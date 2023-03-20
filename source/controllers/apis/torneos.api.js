const{torneo, equipo_torneo, fair_play, goleador, sancionado}=require("../../database/models/index")
module.exports={
    //ESTE allTorneos es el que vas a requerir en el home en el desplegable del header "torneos", van a estar de mas nuevos a mas viejos
    
    allTorneos:async(req,res)=>{
        try{
            
            let torneos = await torneo.findAll({
                include:{all:true},
                order:[
                    ["temporada","DESC"],
                    ["id","DESC"]
                ]
            })
            torneos = torneos.map(t=>{
                let data={
                    id:t.id,
                    name: `${t.name} ${t.temporada}`,
                    name_url:t.name_url
                }
                return data
            })
            return res.send({torneos:torneos}).status(200)
        }catch(error){
            return res.status(505).json(error)
        }
    },
    //EN oneTorneo voy a mandar los datos para mostrar cuando se selecciona un torneo, el nombre, el reglamento, la descripcion de la categoria a la que pertenece, etc
    //tambien voy a enviar los datos de las tablas, los datos de los goleadores y los datos de fair play por ahora, estaba en duda si lo enviaba en esta ruta o armaba un controlador para cada uno
    oneTorneo:async(req,res)=>{
        try{

            
            let elTorneo = await torneo.findOne({
                include:{all:true},
                where:{
                    name_url:req.params.torneo_url
                }
            })
        
            let datosTorneo={
                //COLOCAR UN NAME O ALGO PARA QUE FIGURE EN LA RUTA PARA QUE QUEDE MEJOR
                id:elTorneo.id,
                name:`${elTorneo.name} ${elTorneo.temporada}`,
                name_url:elTorneo.name_url,
                description:elTorneo.categoria.description,
                reglamento:"reglamento"
            }
            elTorneo = datosTorneo
           
            let tabla= await equipo_torneo.findAll({
                include:{all:true},
                where:{
                    torneo_id:elTorneo.id
                },
                order:[
                    ["pts", "DESC"],
                    ["g_dif", "DESC"],
                    ["g_favor", "DESC"],
                    ["p_ganados", "DESC"],
                ]
            })
            
            //TE ENVIO LOS DATOS DE LA TABLA Y LOS COLORES DE CADA UNO PARA QUE LE PONGAS ADELANTE DEL NOMBRE DEL EQUIPO EN LA VISTA.
            tabla = tabla.map((e, index)=>{
                let data = {
                    //YA VA CON LA POSICION DE LA TABLA PUESTA
                    pos:index+1,
                    equipo:e.team_name,
                    pts:e.pts,
                    p_jugados:e.p_jugados,
                    p_ganados:e.p_ganados,
                    p_empatados:e.p_empatados,
                    p_perdidos:e.p_perdidos,
                    g_favor:e.g_favor,
                    g_contra:e.g_contra,
                    g_dif:e.g_dif,
                    colores:[]
                }
                if(e.color_1 != null){
                    data.colores.push(e.color_1)
                }
                if(e.color_2 != null){
                    data.colores.push(e.color_2)
                }
                if(e.color_3 != null){
                    data.colores.push(e.color_3)
                }
                return data
            })
            

            let fp = await fair_play.findAll({
                include:{all:true},
                where:{
                    torneo_id:elTorneo.id
                },
                order:[
                    ["puntos", "ASC"],
                    ["amonestaciones","ASC"]
                ]
            })
            fp = fp.map((f, index)=>{

                let data = {
                    pos: index + 1,
                    equipo: f.equipo.name,
                    puntos:f.puntos,
                    amarillas:f.amarillas,
                    rojas:f.rojas,
                    amonestaciones:f.amonestaciones,
                    motivos_amonestaciones:f.motivos_amon 
                }
                return data;

            })

            let goleadores = await goleador.findAll({
                include:{all:true},
                where:{
                    torneo_id: elTorneo.id
                },
                order:[
                    ["goles","DESC"]
                ]
            })
            goleadores = goleadores.map((g, index)=>{
                //TE PASO LOS COLORES DE LOS EQUIPOS PARA PONER COMO SI FUERA EL ESCUDO
                let data ={
                    pos: index+1,
                    equipo:g.equipo.team_name,
                    colores_equipo:[],
                    apellido: g.last_name,
                    nombre: g.name,
                    goles:g.goles

                }
                if(g.equipo.color_1 != null){
                    data.colores_equipo.push(g.equipo.color_1)
                }
                if(g.equipo.color_2 != null){
                    data.colores_equipo.push(g.equipo.color_2)
                }
                if(g.equipo.color_3 != null){
                    data.colores_equipo.push(g.equipo.color_3)
                }
                return data

            })
            let sancionados = await sancionado.findAll({
                include:{all:true},
                where:{
                    torneo_id: elTorneo.id
                },
                order:[
                    ["f_sancion", "ASC"]
                ]
            })
            sancionados = sancionados.map(sanc=>{
                let data={
                    equipo:sanc.equipo.team_name,
                    nombre: `${sanc.last_name} ${sanc.name}`,
                    f_sancion:sanc.fecha.name,
                    sancion: sanc.sancion,
                    vuelta: sanc.f_vuelta,
                    aclaraciones: sanc.aclaraciones?sanc.aclaraciones:null
                }
                return data
            })
// DE ACA SOLO FALTARIAN LAS FECHAS Y LOS PARTIDOS.
            return res.send({torneo: elTorneo, tabla:tabla,goleadores:goleadores, fair_play:fp, sanciones:sancionados}).status(200)
        }
        catch(error){
            return res.status(505).json(error)
        }
    }

}