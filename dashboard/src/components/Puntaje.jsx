import React from 'react'

export default function Puntaje({ equipo, goles, colores }) {
    return (
        <div className={`h-full w-full flex-wrap flex gap-1 justify-center`}>
            <div className='flex w-full justify-center items-center gap-2'>
                <h4 className=''>{equipo}</h4>
                <div className='flex w-5 h-5 rounded-md'>
                    {colores && colores.map(c => <div style={{ backgroundColor: `${c}` }} key={c} className={`h-full w-full`}></div>)}
                </div>
            </div>
            <span className='w-[100%] block text-center text-5xl'>{goles}</span>
        </div>
    )
}
