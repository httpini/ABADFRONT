import React from 'react'
import ColoresEquipo from './ColoresEquipo'

export default function Puntaje({ equipo, goles, colores }) {
    return (
        <div className={`h-full w-full flex-wrap flex gap-1 justify-center`}>
            <div className='flex w-full justify-center items-center gap-2'>
                <h4 className=''>{equipo}</h4>
                {
                    colores.length > 0 && <ColoresEquipo colores={colores} />
                }
            </div>
            {
                goles != undefined && (<span className='w-[100%] block text-center text-5xl'>{goles}</span>)
            }
        </div>
    )
}
