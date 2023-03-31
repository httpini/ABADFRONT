const { equipo, torneo, equipo_torneo, fair_play, goleador, sancionado, partido, categoria, fecha, club } = require("../../database/models/index")
const { Op } = require('sequelize');

module.exports = {
    //ESTE allTorneos es el que vas a requerir en el home en el desplegable del header "torneos", van a estar de mas nuevos a mas viejos

    allTorneos: async (req, res) => {
        try {
            let torneos = await torneo.findAll({
                // include:{all:true},
                order: [
                    ["temporada", "DESC"],
                    ["id", "DESC"]
                ]
            })

            torneos = torneos.map(t => {
                let data = {
                    id: t.id,
                    name: `${t.name} ${t.temporada}`,
                    name_url: t.name_url
                }
                return data
            })
            return res.send({ torneos }).status(200)
        } catch (error) {
            return res.status(505).json(error)
        }
    },
    //EN oneTorneo voy a mandar los datos para mostrar cuando se selecciona un torneo, el nombre, el reglamento, la descripcion de la categoria a la que pertenece, etc
    //tambien voy a enviar los datos de las tablas, los datos de los goleadores y los datos de fair play por ahora, estaba en duda si lo enviaba en esta ruta o armaba un controlador para cada uno
    oneTorneo: async (req, res) => {
        try {
            let datosElTorneo = await torneo.findOne({
                include: [
                    {
                        model: categoria,
                        as: "categoria",
                        atributes: ["id", "description"]
                    }
                ],
                where: {
                    name_url: req.params.torneo_url
                }
            })

            let elTorneo = {
                //COLOCAR UN NAME O ALGO PARA QUE FIGURE EN LA RUTA PARA QUE QUEDE MEJOR
                id: datosElTorneo.id,
                name: `${datosElTorneo.name} ${datosElTorneo.temporada}`,
                name_url: datosElTorneo.name_url,
                reglamento: "reglamento"
            }


            async function funcionTabla() {
                let result = await equipo_torneo.findAll({
                    where: {
                        torneo_id: elTorneo.id
                    },
                    include:[
                        {
                            model:equipo,
                            as:"equipo",
                            atributes:["name_url"]
                        },
                        {
                            model:club,
                            as:"club",
                            atributes:["name_url"]
                        }
                    ],
                    order: [
                        ["pts", "DESC"],
                        ["g_dif", "DESC"],
                        ["g_favor", "DESC"],
                        ["p_ganados", "DESC"],
                    ]
                })
                let mappedResult = result.map((e, index) => {
                    let data = {
                        //YA VA CON LA POSICION DE LA TABLA PUESTA
                        pos: index + 1,
                        club_url:e.club.name_url,
                        equipo_url:e.equipo.name_url,
                        equipo: e.team_name,
                        pts: e.pts,
                        p_jugados: e.p_jugados,
                        p_ganados: e.p_ganados,
                        p_empatados: e.p_empatados,
                        p_perdidos: e.p_perdidos,
                        g_favor: e.g_favor,
                        g_contra: e.g_contra,
                        g_dif: e.g_dif,
                        colores: []
                    }
                    if (e.color_1 != null && e.color_1 != "") {
                        data.colores.push(e.color_1)
                    }
                    if (e.color_2 != null && e.color_2 != "") {
                        data.colores.push(e.color_2)
                    }
                    if (e.color_3 != null && e.color_3 != "") {
                        data.colores.push(e.color_3)
                    }
                    return data
                })

                return mappedResult
            }

            async function funcionFp() {
                let result = await fair_play.findAll({
                    include: [
                        {
                            model: equipo,
                            as: "equipo",
                            atributes: ["id", "name", "color_1", "color_2", "color_3"]
                        }
                    ],
                    where: {
                        torneo_id: elTorneo.id
                    },
                    order: [
                        ["puntos", "ASC"],
                        ["amonestaciones", "ASC"]
                    ]
                })
                let mappedResult = result.map((f, index) => {

                    let data = {
                        pos: index + 1,
                        equipo: f.equipo.name,
                        colores_equipo: [],
                        puntos: f.puntos,
                        amarillas: f.amarillas,
                        rojas: f.rojas,
                        amonestaciones: f.amonestaciones,
                        motivos_amonestaciones: f.motivos_amon
                    }
                    if (f.equipo.color_1 != null && f.equipo.color_1 != "") {
                        data.colores_equipo.push(f.equipo.color_1)
                    }
                    if (f.equipo.color_2 != null && f.equipo.color_2 != "") {
                        data.colores_equipo.push(f.equipo.color_2)
                    }
                    if (f.equipo.color_3 != null && f.equipo.color_3 != "") {
                        data.colores_equipo.push(f.equipo.color_3)
                    }
                    return data;

                })

                return mappedResult
            }

            async function funcionGoleadores() {
                let result = await goleador.findAll({
                    include: [
                        {
                            model: equipo_torneo,
                            as: "equipo",
                            atributes: ["id", "team_name", "color_1", "color_2", "color_3"]

                        }
                    ],
                    where: {
                        torneo_id: elTorneo.id
                    },
                    order: [
                        ["goles", "DESC"]
                    ]
                })

                let mappedResult = result.map((g, index) => {
                    let data = {
                        pos: index + 1,
                        equipo: g.equipo.team_name,
                        colores_equipo: [],
                        nombre: `${g.last_name} ${g.name}`,
                        goles: g.goles

                    }
                    if (g.equipo.color_1 != null && g.equipo.color_1 != "") {
                        data.colores_equipo.push(g.equipo.color_1)
                    }
                    if (g.equipo.color_2 != null && g.equipo.color_2 != "") {
                        data.colores_equipo.push(g.equipo.color_2)
                    }
                    if (g.equipo.color_3 != null && g.equipo.color_3 != "") {
                        data.colores_equipo.push(g.equipo.color_3)
                    }
                    return data
                })


                return mappedResult
            }

            async function funcionSancionado() {
                let result = await sancionado.findAll({
                    include: [
                        {
                            model: equipo_torneo,
                            as: "equipo",
                            atributes: ["team_name"]
                        },
                        {
                            model: fecha,
                            as: "fecha",
                            atributes: ["name"]
                        }
                    ],
                    where: {
                        torneo_id: elTorneo.id
                    },
                    order: [
                        ["f_sancion", "ASC"]
                    ]
                })
                console.log(result);
                let mappedResult = result.map(sanc => {
                    let data = {
                        equipo: sanc.equipo.team_name,
                        colores_equipo: [],
                        nombre: `${sanc.last_name} ${sanc.name}`,
                        f_sancion: sanc.fecha.name,
                        sancion: sanc.sancion,
                        vuelta: sanc.f_vuelta,
                        aclaraciones: sanc.aclaraciones ? sanc.aclaraciones : null
                    }
                    if (sanc.equipo.color_1 != null && sanc.equipo.color_1 != "") {
                        data.colores_equipo.push(sanc.equipo.color_1)
                    }
                    if (sanc.equipo.color_2 != null  && sanc.equipo.color_2 != "") {
                        data.colores_equipo.push(sanc.equipo.color_2)
                    }
                    if (sanc.equipo.color_3 != null  && sanc.equipo.color_3 != "") {
                        data.colores_equipo.push(sanc.equipo.color_3)
                    }
                    return data
                })
                console.log(mappedResult);
                return mappedResult
            }


            let calls = await Promise.all([funcionTabla(), funcionFp(), funcionGoleadores(), funcionSancionado()])




            // DE ACA SOLO FALTARIAN LAS FECHAS Y LOS PARTIDOS.
            return res.send({
                torneo: elTorneo,
                tabla: calls[0],
                fair_play: calls[1],
                goleadores: calls[2],
                sanciones: calls[3],
            }
            ).status(200)
        }
        catch (error) {
            return res.status(505).json(error)
        }
    },
    equipoEnTorneo: async (req, res) => {
        try {
            //VOY A DIVIDIR LA INFORMACION ENTRE DATOS DEL EQUIPO, TABLA, FAIR PLAY, GOLEADORES, SANCIONADOS Y PARTIDOS
            let elTorneo = await torneo.findOne({
                where: {
                    name_url: req.params.torneo_url
                }
            })

            
            // let elEquipo = await equipo.findByPk(req.params.equipo_id)
            let elEquipo = await equipo.findOne({
                where: {
                    name_url: req.params.equipo_url
                }
            })

            //traemos todos los equipos para mapearle la posicion en la tabla
            let pos = await equipo_torneo.findAll({
                order: [
                    ["pts", "DESC"]
                ],
                where: {
                    torneo_id: elTorneo.id
                }
            })

            pos = pos.map((p, i) => {
                let data = {
                    pos: i + 1,
                    equipo_id: p.equipo_id,
                }
                return data
            })

            pos = pos.filter(p => {
                return p.equipo_id == elEquipo.id
            })//filtramos el equipo que queremos para dejar como dato su posicion enla tabla

            let laPos = pos[0].pos

            let datosEquipo = await equipo_torneo.findOne({
                include: { all: true },
                where: {
                    torneo_id: elTorneo.id,
                    equipo_id: elEquipo.id
                }
            })
            // console.log('holaaa' , datosEquipo);

            //DATOS DEL EQUIPO
            let equipoDatos = {
                // id: datosEquipo.id,
                name: datosEquipo.team_name,
                colores: [],
                predio_name: datosEquipo.predio ? datosEquipo.predio.name : null,
                predio_direccion: datosEquipo.predio ? datosEquipo.predio.adress : null,
                predio_url: datosEquipo.predio ? datosEquipo.predio.map : null,
                horario_local: datosEquipo.horario_local ? datosEquipo.horario_local : null,
            }
            if (datosEquipo.color_1 != null && datosEquipo.color_1 != "") {
                equipoDatos.colores.push(datosEquipo.color_1)
            }
            if (datosEquipo.color_2 != null && datosEquipo.color_2 != "") {
                equipoDatos.colores.push(datosEquipo.color_2)
            }
            if (datosEquipo.color_3 != null && datosEquipo.color_3 != "") {
                equipoDatos.colores.push(datosEquipo.color_3)
            }


            //DATOS DE LA TABLA
            let tablaDatos = {
                posicion: laPos,
                puntos: datosEquipo.pts,
                partidosJugados: datosEquipo.p_jugados,
                partidosGanados: datosEquipo.p_ganados,
                partidosEmpatados: datosEquipo.p_empatados,
                partidosPerdidos: datosEquipo.p_perdidos,
                golesFavor: datosEquipo.g_favor,
                golesContra: datosEquipo.g_contra,
                diferenciaGol: datosEquipo.g_dif
            }

            let goleadores = await goleador.findAll({
                include: { all: true },
                order: [
                    ["goles", "DESC"]
                ],
                where: {
                    torneo_id: elTorneo.id,
                    equipo_id: datosEquipo.id
                }
            })

            let goleadoresDatos = null
            //DATOS DE GOLEADORES, SI NO HAY NINGUNO DEVUELVE NULL
            if (goleadores) {
                goleadoresDatos = goleadores.map(g => {
                    let data = {
                        name: `${g.last_name} ${g.name}`,
                        goles: g.goles
                    }
                    return data
                })
            }

            let sanciones = await sancionado.findAll({
                include: { all: true },
                where: {
                    equipo_id: datosEquipo.id,
                    torneo_id: elTorneo.id
                },
                order: [
                    ["f_sancion", "DESC"]
                ]
            })

            let sancionesDatos = null
            //DATOS DE SANCIONES, SI NO HAY NINGUNO DEVUELVE NULL
            if (sanciones) {
                sancionesDatos = sanciones.map(sanc => {
                    let data = {
                        name: `${sanc.last_name} ${sanc.name}`,
                        f_sancion: sanc.fecha.name,
                        sancion: sanc.sancion,
                        f_vuelta: sanc.f_vuelta
                    }
                    return data
                })
            }


            //Ahora vamos a buscar los datos de fairplay

            let posFP = await fair_play.findAll({
                order: [
                    ["puntos", "ASC"]
                ],
                include: { all: true },
                where: {
                    torneo_id: elTorneo.id
                }
            })
            posFP = posFP.map((fp, i) => {
                let data = {
                    pos: i + 1,
                    equipo_id: fp.equipo_id,
                    nombre: fp.equipo.name
                }
                return data
            })
            posFP = posFP.find(p => {
                return p.equipo_id == elEquipo.id
            })//filtramos el equipo que queremos para dejar como dato su posicion enla tabla
            
            let laPosFP = posFP.pos

            let fp = await fair_play.findOne({
                include: { all: true },
                where: {
                    torneo_id: elTorneo.id,
                    equipo_id: elEquipo.id
                }
            })
            let fpDatos = {
                posicion: laPosFP,
                tarjetasAmarillas: fp.amarillas,
                tarjetasRojas: fp.rojas,
                amonestaciones: fp.amonestaciones
            }

            //AHORA VOY A TRAER LOS DATOS DE LOS PARTIDOS
            // console.log('equipoId:', datosEquipo.id);
            let partidos = await partido.findAll({
                include: { all: true },
                order: [
                    ["dia", "DESC"]
                ],
                where: {
                    torneo_id: elTorneo.id,
                    // estado_id: 4,
                    [Op.or]: [
                        { visitante_id: datosEquipo.id },
                        { local_id: datosEquipo.id }
                    ]
                }
            })

            // console.log('partidos', partidos, elTorneo.id);
            let acumulador = 0

            let partidosDatos = partidos.map(p => {
                let fechaOriginal = p.dia
                let elementosDia = fechaOriginal.split("-")
                let dateFormated = elementosDia[2] + "-" + elementosDia[1] + "-" + elementosDia[0]
                let data = {
                    dia: p.dia == "0000-00-00" || p.dia == null? "A Confirmar":dateFormated,
                    fecha: p.fecha.nro,
                    localVisitante: p.local_id == datosEquipo.id ? "L" : "V",
                    rival: p.local_id == datosEquipo.id ? p.visitante.team_name : p.local.team_name,
                    goles: {
                        equipo: p.local_id == datosEquipo.id ? p.g_local : p.g_visitante,
                        rival: p.local_id == datosEquipo.id ? p.g_visitante : p.g_local
                    }
                    // resultado: p.local_id == datosEquipo.id ? `${p.g_local} - ${p.g_visitante}` : `${p.g_visitante} - ${p.g_local}`
                }
                if (data.goles.equipo > data.goles.rival) acumulador += 3
                if (data.goles.equipo == data.goles.rival) acumulador += 1
                data.goles.equipo !== null ? data.puntos = acumulador : null
                return data
            })

            return res.send({
                equipo: equipoDatos,
                tabla: tablaDatos,
                fair_play: fpDatos,
                goleadores: goleadoresDatos,
                sancionados: sancionesDatos,
                partidos: partidosDatos,

            }).status(200)

        } catch (error) {
            return res.status(505).json(error)
        }
    }

}