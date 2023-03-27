import React, { useState, useEffect } from 'react'

export default function ColoresEquipo({ colores }) {
    const [cols, setCols] = useState([])
    console.log(colores);
    useEffect(() => {
        let colorArray = [];
        colores.forEach(c => { if (c !== '') colorArray.push(c) })
        setCols(colorArray)
    }, [colores])

    return (
        <div className='flex w-5 h-5 rounded-md overflow-hidden'>
            {cols && cols.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full `}></div>)}
        </div>
    )
}
