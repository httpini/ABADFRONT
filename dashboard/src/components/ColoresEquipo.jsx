import React, { useState, useEffect } from 'react'
import { mask } from '../../public/ABADlogo.svg'

export default function ColoresEquipo({ colores, width = '20px', height = '20px' }) {
    const [cols, setCols] = useState([])
    useEffect(() => {
        let colorArray = [];
        colores.forEach(c => { if (c !== '') colorArray.push(c) })
        setCols(colorArray)
    }, [colores])

    return (
        <div className={`mask w-[${width}] h-[${height}] flex items-center`}>
            <div className='flex w-full h-full rounded-md overflow-hidden'>
                {cols && cols.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full`}></div>)}
            </div>
        </div>
    )
}
