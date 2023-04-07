import React, { useState, useEffect } from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

import {GiSoccerField} from "react-icons/gi" //PARA IMPORTAR ICONOS DESTRUCTURAR EL NOMBRE DEL ICONO, FROM react-icons/ las dos primeras iniciales
import{AiOutlineClockCircle, AiOutlineCalendar} from "react-icons/ai"
import {BiFootball} from "react-icons/bi"

const activeTopicStyle = 'font-bold text-xl text-center text-claro1'
const notActive = 'hover:text-claro1 hover:underline'

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
            <div className={`flex flex-wrap justify-around items-center border-b-2 border-oscuro1 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50`}>
                <h1 className='font-bold text-xl text-center text-amarillo'>Fechas y Partidos</h1>
                <div className='flex flex-nowrap gap-3 items-center justify-around bg-oscuro1 px-5 text-amarillo rounded-lg mb-2 '>
                    {Array(cantPartidos).fill(0).map((x, i) =>
                        <div key={i + 1} onClick={cambioFecha} className='my-1 cursor-pointer'><h3 className={`${i == fecha - 1 ? activeTopicStyle : notActive}`}>{i + 1}</h3></div>
                    )}
                </div>
            </div>
            {partidosFecha.length > 0 ?
                (<table className='w-full '>
                    <thead className='font-thin border-b-2 border-oscuro1 bg-opacity-30'>
                        <tr>
                            <th className='hidden mini:table-cell text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Estado</th>
                            <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'>Local</th>
                            <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-row gap-2 items-center justify-center '><BiFootball className='text-xl'></BiFootball></div></th>
                            <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'>Visitante</th>
                            <th className='hidden mini:table-cell text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-row items-center justify-center '><AiOutlineCalendar className='text-xl'></AiOutlineCalendar></div></th>
                            <th className=' text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-row items-center justify-center '><AiOutlineClockCircle className='text-xl'></AiOutlineClockCircle></div></th>
                            <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-row items-center justify-center '><GiSoccerField className='text-3xl'></GiSoccerField></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            partidosFecha.map((e, i) => (
                                <tr className={`${i % 2 == 0 ? 'par' : ''} font-thin`} key={i}>
                                    <th className='font-thin hidden mini:block'>{e.estado}</th>
                                    <th className='font-thin text-center'>{e.local_name}</th>
                                    <th className='font-thin text-center min-w-goles'>{e.g_local}-{e.g_visitante}</th>
                                    <th className='font-thin text-center'>{e.visitante_name}</th>
                                    <th className='font-thin hidden mini:block text-center'>{e.dia ? e.dia : 'a confirmar'}</th>
                                    <th className='font-thin text-center'>{e.hora ? e.hora : 'a confirmar'}</th>
                                    <th className='font-thin text-center  hover:text-amarillo hover:font-bold'><Link href={e.predio_url ? e.predio_url : '#'} target={e.predio_url ? "_blank" : ''} style={e.predio_url ? { cursor: 'pointer' } : { cursor: 'default' }} >{e.predio_name ? e.predio_name : 'a confirmar'}</Link></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>) : <h3 className='text-center p-6 font-black text-red-900'>a confirmar</h3>
            }
        </div >
    )
}
