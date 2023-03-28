import React from 'react'
import Link from 'next/link'

export default function TarjetaClub({ club }) {
    return (
        <div className='text-center text-2xl'>
            <Link href={`club/${club.name_url}`}>{club.name}</Link>
            {/* <div>
                <h3>Equipo 1</h3>
                <h3>Equipo 2</h3>
                <h3>Equipo 3</h3>
            </div> */}
        </div>
    )
}
