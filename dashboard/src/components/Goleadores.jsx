import React from 'react'
import Link from 'next/link'
import {BiFootball} from "react-icons/bi"

export default function Goleadores({ goleadores }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3  bg-oscuro3'>
            <h1 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Goleadores/as</h1>
            {goleadores.length > 0 ? <table className='w-full'>
                <thead className='font-thin '>
                    <tr>
                        <th className=" text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">#</th>
                        <th className=" text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">Equipo</th>
                        <th className=" text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">Jugador/a</th>
                        <th className="text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50"><div className='flex flex-row gap-2 items-center justify-center '><p>Goles</p><BiFootball></BiFootball></div></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        goleadores && goleadores.map((g, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th>{i + 1}</th>
                                {/*FALTA LO MISMO DE AGREGAR LOS COLORES A LOS EQUIPOS Y HAY QUE VER QUE LOGICA ARMAMOS PARA EL href=""*/}
                                <th className='text-center' ><Link href={`/equipo/${g.equipo}`}>{g.equipo}</Link></th>
                                <th className='text-center'>{g.nombre}</th>
                                <th className='text-center'>{g.goles}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                : <div className='p-5 flex justify-center items-center h-full'>
                    <h2 className='text-center w-[200px]'>Aún no hay goleadores registrados</h2></div>}
        </div>
    )
}
