import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InformacionEquipo({ nombreEquipo, nombreTorneo, fairPlay, goleadores, tabla, sancionados, torneo }) {
    const [visible, setVisible] = useState(false)
    return (
        <div className='break:col-span-2 justify-self-center self-center w-full break:w-[70%] tarjeta bg-oscuro3 shadow-md shadow-oscuro3 p-5'>
            <div>
                <h2 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Goleadores/as</h2>
                <ul className='text-center'>
                    {goleadores.map((g, i) => <li key={g.name} className={`${i % 2 == 0 ? 'par' : ''}`}>{g.name}: {g.goles} goles</li>)}
                </ul>
                <h2 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 my-2'>Sanciones Activas</h2>
                <table className='w-full'>
                <thead className='font-thin border-b-2 border-oscuro1 bg-opacity-30'>
                    <tr>
                        
                        <th className='text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Jugador/a</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Expulsion</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center hidden mini:block">Pena</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Vuelve</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sancionados && sancionados.map((s, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th className='text-center' >{s.name}</th>
                                <th className='text-center'>{s.f_sancion}</th>
                                <th className='text-center hidden mini:block'>{s.sancion}</th>
                                <th className='text-center'>{s.f_vuelta}</th>

                            </tr>
                        ))
                    }
                </tbody >
            </table >
                
            </div>
        </div >
    )
}
