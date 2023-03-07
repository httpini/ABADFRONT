import React, { useState, useRef } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import LinkHeader from './LinkHeader'
import Link from 'next/link'


let list = [1, 2, 4, 5, 6, "ajsdofjadsfoaod"]

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='flex w-full justify-around h-[75px] items-center bg-black text-white fixed'>
            <div className='md:flex hidden justify-around flex-grow mr-[5em]'>
                <LinkHeader texto='Torneos' lista={list} pagina='torneo'/>
                <LinkHeader texto='Copas' lista={list} pagina='copa'/>
            </div>
            <Link href='/'>
                <h1 className='flex-grow flex justify-center'>LOGO</h1>
            </Link>
            <div>
                {toggleMenu ?
                    <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[30vw] h-screen shadow-2xl md:hidden list-none 
                    flex flex-col justify-start items-end rounded-md bg-black text-white animate-slide-in'>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <LinkHeader texto='Torneos' lista={list} pagina='torneo'/>
                        <LinkHeader texto='Copas' lista={list} pagina='copa' />
                        <LinkHeader texto='Predios' lista={[]} pagina='predio' />
                        <LinkHeader texto='Nosotros' lista={[]} pagina='nosotros' />
                    </ul>
                )}
            </div>
            <div className='md:flex hidden justify-around flex-grow ml-[5em]'>
                <LinkHeader texto='Predios' lista={[]} pagina='predio'/>
                <LinkHeader texto='Nosotros' lista={[]} pagina='nosotros'/>
            </div>
        </div>
    )
}
