import Link from 'next/link'
import React from 'react'

export default function LinksClubes({query,  equipo, torneo}) {
    return (
        <Link href={{ pathname: `/club`, query: { torneo: query.torneo, equipo: equipo } }}>hola</Link>
    )
}
