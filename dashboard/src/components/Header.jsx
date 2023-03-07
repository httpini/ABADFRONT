import React from 'react'
import LinkHeader from './LinkHeader'

let list = [1, 2, 4, 5, 6, "ajsdofjadsfoaod"]

export default function Header() {
    return (
        <div className='flex w-full justify-around'>
            <LinkHeader texto='Torneos' lista={list}/>
            <LinkHeader texto='Copas' lista={list}/>
            <h1>LOGO</h1>
            <LinkHeader texto='Partidos' />
            <LinkHeader texto='Predios' />
        </div>
    )
}
