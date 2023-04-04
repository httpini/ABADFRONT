import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ColoresEquipo from './ColoresEquipo'

const activeTopicStyle = 'underline font-bold text-center flex gap-1'
const topicStyle = 'text-center flex gap-1'

export default function LinksEquipos({ id, query, equipo }) {
    let router = useRouter();
    return (
        <Link className={equipo.name_url == router.query.equipo ? activeTopicStyle : topicStyle} href={{ pathname: `/club/${id}`, query: { equipo: equipo.name_url } }}>{equipo.name} - {equipo.categoria} <ColoresEquipo colores={equipo.colores}/></Link>
    )
}
