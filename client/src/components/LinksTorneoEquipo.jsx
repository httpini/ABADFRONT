import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router'

const activeTopicStyle = 'rounded-xl font-bold text-center flex gap-1 bg-oscuro1 text-claro1 p-1.5 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'
const topicStyle = 'rounded-xl hover:underline text-center flex gap-1 bg-oscuro3 text-amarillo p-1.5 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'

export default function LinksTorneoEquipo({ query, torneo }) {
    let router = useRouter();
    // console.log('query', query.id, query.equipo, torneo.name_url);
    return (
        <Link className={torneo.name_url == router.query.torneo ? activeTopicStyle : topicStyle} href={{ pathname: `/club/${query.id}`, query: { equipo: query.equipo, torneo: torneo.name_url } }}>{torneo.name}</Link>
    )
}
