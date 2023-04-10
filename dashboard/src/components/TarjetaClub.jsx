import React from 'react'
import Link from 'next/link'

export default function TarjetaClub({ club, url, name }) {
    return (
        <div className='text-center text-xl rounded-lg h-20 bg-gradient-to-br from-oscuro1 to-oscuro3 hover:scale-y-110 hover:shadow-oscuro1 hover:shadow-xl hover:font-bold text-amarillo transition-all duration-1 ease-in-out'>
            <Link className='w-full h-full align-middle flex items-center justify-center px-5 ' href={`club/${url}`}>{name}</Link>
        </div>
    )
}
