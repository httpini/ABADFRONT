import React from 'react'
import ColoresEquipo from './ColoresEquipo'

export default function Puntaje({ equipo, goles, colores, local }) {
    return (
        <div className={`h-full w-full flex-wrap flex justify-start`}>
            <div className='flex w-full flex-wrap flex-col justify-center items-center'>
                {/* {
                    (!local && colores.length > 0) && <ColoresEquipo colores={colores} />
                } */}
                <h4 className='text-center w-full'>{equipo}</h4>
                {/* {
                    (local && colores.length > 0) && <ColoresEquipo colores={colores} />
                } */}
                {
                    (goles == undefined && colores.length > 0) && <ColoresEquipo colores={colores} />
                }
            </div>
            {
                goles != undefined && (<span className='w-[100%] block text-center text-5xl'>{goles}</span>)
            }
        </div>
    )
}
