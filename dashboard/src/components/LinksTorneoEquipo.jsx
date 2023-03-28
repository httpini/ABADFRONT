import Link from 'next/link';
import React from 'react'

export default function LinksTorneoEquipo({ query, torneo }) {
    return (
        <Link href={{ pathname: `/club/${query.id}`, query: { equipo: query.equipo, torneo:torneo.name_url } }}>{torneo.name}</Link>
    )
}
