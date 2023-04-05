import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InformacionEquipo({ nombreEquipo, nombreTorneo, fairPlay, goleadores, tabla, sancionados, torneo }) {
    const [visible, setVisible] = useState(false)
    return (
        <div className='break:col-span-2 justify-self-center self-center w-full break:w-[70%] tarjeta bg-oscuro3 shadow-md shadow-oscuro3 p-5'>
            <div>
                <h2 className='border-b-2'>Goleadores</h2>
                <ul className='ml-10'>
                    {goleadores.map(g => <li>{g.name}: {g.goles} goles</li>)}
                </ul>
                <h2 className='border-b-2'>Sanciones Activas</h2>
                <ul className='ml-10'>
                    {sancionados.map(s =>
                        <li>
                            <div className='flex gap-5 relative'>
                                <h3 className='inline'>{s.name}</h3>
                                <span onMouseEnter={() => setVisible(!visible)} onMouseLeave={() => setVisible(!visible)}>+</span>
                                {
                                    // visible &&
                                    <div className='flex gap-3 flex-wrap'>
                                        <h3 className='inline'>Inicio: {s.f_sancion}</h3>
                                        {/* <h3 className='inline'>duracion: {s.sancion}</h3> */}
                                        <h3 className='inline'>Vuelta: {s.f_vuelta}</h3>
                                    </div>
                                }
                            </div>
                        </li>)}
                </ul>
            </div>
        </div >
    )
}
