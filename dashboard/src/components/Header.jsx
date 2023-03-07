import React, { useState } from 'react'
import LinkHeader from './LinkHeader'

let list = [1, 2, 4, 5, 6, "ajsdofjadsfoaod"]

export default function Header() {
    const [visible, setVisible] = useState(false)

    return (
        <div className='flex w-full justify-around h-[75px] items-center bg-black text-white fixed'>
            <div className='flex justify-around flex-grow'>
                <LinkHeader texto='Torneos' lista={list} />
                <LinkHeader texto='Copas' lista={list} />
            </div>
            <h1 className='flex-grow flex justify-center'>LOGO</h1>
            <div className='flex justify-around flex-grow'>
                <LinkHeader texto='Partidos' lista={[]} />
                <LinkHeader texto='Predios' lista={[]}/>
            </div>
        </div>
    )
}
