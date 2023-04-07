import React from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import {TbRectangleVerticalFilled} from "react-icons/tb"

export default function FairPlay({ fair_play }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
            <h1 className='font-bold text-xl border-b-2 border-oscuro1 text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Fair Play</h1>
            <table className='w-full'>
                <thead className='font-thin bg-opacity-70 border-b-2 border-oscuro1'>

                    <tr>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>#</th>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Equipo</th>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'>PTS</th>
                        <th className=' text-amarillo-tarjeta drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-rowitems-center justify-center '><TbRectangleVerticalFilled></TbRectangleVerticalFilled></div></th>
                        <th className=' text-rojo-tarjeta drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'><div className='flex flex-rowitems-center justify-center '><TbRectangleVerticalFilled></TbRectangleVerticalFilled></div></th>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'>Amonestaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fair_play && fair_play.map((fp, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th>{i + 1}</th>
                                {/*LO MISMO FALTA PONERLE COLORES A LOS EQUIPOS*/}
                                <th>{fp.equipo}</th>
                                <th className='text-center'>{fp.puntos}</th>
                                <th className='text-center'>{fp.amarillas}</th>
                                <th className='text-center'>{fp.rojas}</th>
                                <th className='text-center'>{fp.amonestaciones}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
