import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ColoresEquipo from './ColoresEquipo'

const activeTopicStyle = 'rounded-xl font-bold text-center flex gap-1 bg-oscuro1 text-claro1 p-1.5'
const topicStyle = 'rounded-xl hover:underline text-center flex gap-1 bg-oscuro3 text-amarillo p-1.5'

export default function LinksEquipos({ id, query, equipo }) {
    let router = useRouter();
    return (
        <Link className={equipo.name_url == router.query.equipo ? activeTopicStyle : topicStyle} href={{ pathname: `/club/${id}`, query: { equipo: equipo.name_url } }}><div  className="flex justify-center items-center text-base gap-1.5"><p>{equipo.name} - {equipo.categoria} </p><ColoresEquipo className="border-2 border-white" colores={equipo.colores}/></div></Link>
    )
}
