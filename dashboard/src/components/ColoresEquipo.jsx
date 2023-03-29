import React, { useState, useEffect } from 'react'
import { mask } from '../../public/ABADlogo.svg'

export default function ColoresEquipo({ colores }) {
    const [cols, setCols] = useState([])
    useEffect(() => {
        let colorArray = [];
        colores.forEach(c => { if (c !== '') colorArray.push(c) })
        setCols(colorArray)
    }, [colores])

    return (
        <div className='mask w-[20px] h-[20px]'>
            <div className='flex w-full h-full rounded-md overflow-hidden'>
                {cols && cols.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full`}></div>)}
            </div>
        </div>
    )
}
