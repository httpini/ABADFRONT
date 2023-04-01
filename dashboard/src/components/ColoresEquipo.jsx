import React, { useState, useEffect } from 'react'

export default function ColoresEquipo({ colores, width = 20, height = 20 }) {
    const [cols, setCols] = useState([])
    // console.log(cols);
    useEffect(() => {
        let colorArray = [];
        colores.forEach(c => { if (c !== '') colorArray.push(c) })
        setCols(colorArray)
    }, [colores])

    return (
        <div className={`mask w-[20px] h-[20px] flex items-center`}>
            <div className='flex w-full h-full rounded-md overflow-hidden'>
                {cols && cols.map(c => <div style={{ backgroundColor: `#${c}` }} key={c} className={`h-full w-full`}></div>)}
            </div>
        </div>
    )
}
