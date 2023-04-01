import React from 'react'
import Link from 'next/link'


export default function Goleadores({ goleadores }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3'>
            <h1 className='text-center font-bold text-xl border-b-2 border-oscuro1'>Goleadores/as</h1>
            {goleadores.length > 0 ? <table className='w-full'>
                <thead className='bg-white'>
                    <tr>
                        <th>#</th>
                        <th>Equipo</th>
                        <th>Jugador/a</th>
                        <th>Goles Realizados</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        goleadores && goleadores.map((g, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                {/*FALTA LO MISMO DE AGREGAR LOS COLORES A LOS EQUIPOS Y HAY QUE VER QUE LOGICA ARMAMOS PARA EL href=""*/}
                                <th><Link href={`/equipo/${g.equipo}`}>{g.equipo}</Link></th>
                                <th>{g.nombre}</th>
                                <th>{g.goles}</th>
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
