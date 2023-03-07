import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function LinkHeader({ texto, lista, pagina }) {
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setList(lista)
    }, [lista])

    return (
        <div className='relative'>
            <Link href='/' className='cursor-pointer pr-3 py-5' onMouseEnter={() => { if (list.length) setVisible(true) }} onMouseLeave={() => setVisible(false)}>{texto}</Link>
            {visible && (
                <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
                    className='relative md:absolute  bg-red-500 w-[100px] text-center py-1 text-ellipsis'>
                    {list && list.map(l => (<Link href={`./${pagina}/${l}`} key={l} className='text-center text-ellipsis w-full block'>{l}</Link>))}
                </div>)
            }
        </div>
    )
}
