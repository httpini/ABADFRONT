import Link from 'next/link'
import React from 'react'

export default function LinksClubes({query, id, equipo, torneo}) {
    return (
        <Link href={{ pathname: `/club/${id}`, query: { torneo: 'hola', equipo: query.equipo } }}>hola</Link>
    )
}
