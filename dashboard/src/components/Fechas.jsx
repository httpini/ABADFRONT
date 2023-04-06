import React, { useState, useEffect } from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

import {GiSoccerField} from "react-icons/gi" //PARA IMPORTAR ICONOS DESTRUCTURAR EL NOMBRE DEL ICONO, FROM react-icons/ las dos primeras iniciales
import{AiOutlineClockCircle} from "react-icons/ai"
import {MdOutlineCalendarToday} from "react-icons/md"

const activeTopicStyle = 'font-bold underline hover:underline text-center'
const notActive = 'hover:underline'

export default function Fechas({ partidos }) {
    const [fecha, setFecha] = useState(1)
    const [cantPartidos, setCantPartidos] = useState(5)
    const [partidosFecha, setPartidosFecha] = useState([])

    let cambioFecha = (i) => {
        return setFecha(i.target.innerHTML)
    }

    useEffect(() => {
        if (partidos.length) {
            let parts = partidos.filter(p => p.fecha_numero == fecha);
            return setPartidosFecha(parts);
        }
    }, [partidos, fecha])

    useEffect(() => {
        let fechasPartidos = []
        partidos.map(p => { if (!fechasPartidos.includes(p.fecha_numero)) fechasPartidos.push(p.fecha_numero) })
        return setCantPartidos(fechasPartidos.length)
    }, [partidos])

    return (
        <div className='tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
            <div className={`flex flex-wrap justify-between items-center gap-1`}>
                <h1 className='text-center font-bold text-xl'>Fechas y Partidos</h1>
                <div className='flex gap-3 flex-wrap bg-oscuro1 px-5 text-claro1 rounded-lg mb-2 sm:gap-1'>
                    {Array(cantPartidos).fill(0).map((x, i) =>
                        <div key={i + 1} onClick={cambioFecha} className='my-1 cursor-pointer'><h3 className={`${i == fecha - 1 ? activeTopicStyle : notActive}`}>{i + 1}</h3></div>
                    )}
                </div>
            </div>
            {partidosFecha.length > 0 ?
                (<table className='w-full'>
                    <thead className='font-thin text-sm border-b-2 border-oscuro1 bg-opacity-30'>
                        <tr>
                            <th className='hidden mini:block'>Estado</th>
                            <th>Local</th>
                            <th>resultado</th>
                            <th>Visitante</th>
                            <th className='hidden mini:block '><MdOutlineCalendarToday className='text-lg text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'></MdOutlineCalendarToday></th>
                            <th className='text-lg  text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'><AiOutlineClockCircle className='text-center'></AiOutlineClockCircle></th>
                            <th className='rounded-br-md text-3xl  text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'><GiSoccerField ></GiSoccerField></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            partidosFecha.map((e, i) => (
                                <tr className={`${i % 2 == 0 ? 'par' : ''} font-thin`} key={i}>
                                    <th className='font-thin hidden mini:block'>{e.estado}</th>
                                    <th className='font-thin'>{e.local_name}</th>
                                    <th className='font-thin'>{e.g_local} - {e.g_visitante}</th>
                                    <th className='font-thin'>{e.visitante_name}</th>
                                    <th className='font-thin hidden mini:block'>{e.dia ? e.dia : 'a confirmar'}</th>
                                    <th className='font-thin'>{e.hora ? e.hora : 'a confirmar'}</th>
                                    <th className='font-thin'><Link href={e.predio_url ? e.predio_url : '#'} target={e.predio_url ? "_blank" : ''} style={e.predio_url ? { cursor: 'pointer' } : { cursor: 'default' }} >{e.predio_name ? e.predio_name.toLowerCase() : 'a confirmar'}</Link></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>) : <h3 className='text-center p-6 font-black text-red-900'>a confirmar</h3>
            }
        </div >
    )
}
