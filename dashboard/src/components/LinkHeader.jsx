import React, { useEffect, useState } from 'react'

export default function LinkHeader({ texto, lista }) {
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false)
    // console.log(list);
    useEffect(() => {
        setList(lista)
    }, [lista])

    return (
        <div className='relative'>
            <h2 className='cursor-pointer pr-3 py-5' onMouseEnter={() => { if (list.length) setVisible(true) }} onMouseLeave={() => setVisible(false) > { texto }}>{texto}</h2>
            {visible && (
                <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
                    className='relative md:absolute  bg-red-500 w-[100px] text-center py-1 text-ellipsis'>
                    {list && list.map(l => (<h4 key={l} className='text-center text-ellipsis w-full'>{l}</h4>))}
                </div>)
            }
        </div>
    )
}
