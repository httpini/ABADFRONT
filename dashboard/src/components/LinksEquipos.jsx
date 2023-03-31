import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const activeTopicStyle = 'underline font-bold text-center'
const topicStyle = 'text-center'

export default function LinksEquipos({ id, query, equipo }) {
    let router = useRouter();
    return (
        <Link className={equipo.name_url == router.query.equipo ? activeTopicStyle : topicStyle} href={{ pathname: `/club/${id}`, query: { equipo: equipo.name_url } }}>{equipo.name} - {equipo.categoria}</Link>
    )
}
