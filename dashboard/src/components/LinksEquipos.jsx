import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function LinksEquipos({ id, query, equipo }) {
    // const [queryData, setQuery] = useState({})
    // console.log(queryData);
    // useEffect(() => {
    //     let q = {}
    //     if (equipo) q.equipo = equipo;
    //     setQuery(q)
    // }, [])

    return (
        <Link href={{ pathname: `/club/${id}`, query: { equipo: equipo.name_url } }}>{equipo.name} - {equipo.categoria}</Link>
    )
}
