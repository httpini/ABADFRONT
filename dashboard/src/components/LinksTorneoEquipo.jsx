import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router'

const activeTopicStyle = 'underline font-bold text-center'
const topicStyle = 'text-center'

export default function LinksTorneoEquipo({ query, torneo }) {
    let router = useRouter();
    return (
        <Link className={torneo.name_url == router.query.torneo ? activeTopicStyle : topicStyle} href={{ pathname: `/club/${query.id}`, query: { equipo: query.equipo, torneo: torneo.name_url } }}>{torneo.name}</Link>
    )
}
