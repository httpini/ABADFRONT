import React, { useState, useEffect } from 'react'

export default function ColoresEquipo({ colores, width, height, className, hide }) {
    const [cols, setCols] = useState([])

    useEffect(() => {
        let colorArray = [];
        colores.forEach(c => { if (c !== '') colorArray.push(c) })
        setCols(colorArray)
    }, [colores])

    if (colores.length > 0) return (
        <div className={`mask ${width ? `w-[${width}px]` : 'w-[20px]'} ${height ? `h-[${height}px]` : 'h-[20px]'} flex items-center ${hide ? 'hidden mini:block' : ''}`}>
            <div className='flex w-full h-full rounded-md overflow-hidden'>
                {cols && cols.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full`}></div>)}
            </div>
        </div>
    )
}
