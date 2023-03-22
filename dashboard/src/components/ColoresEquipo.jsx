import React from 'react'

export default function ColoresEquipo({ colores }) {
    return (
        <div className='flex w-5 h-5 rounded-md'>
            {colores && colores.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full`}></div>)}
        </div>
    )
}
