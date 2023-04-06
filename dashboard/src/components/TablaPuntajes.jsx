import React from 'react'
import Link from 'next/link'
import ColoresEquipo from './ColoresEquipo'

export default function TablaPuntajes({ tabla }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
            <h1 className='font-bold text-xl'>Tabla de Posiciones</h1>
            <table className='w-full'>
                <thead className='font-thin border-b-2 border-oscuro1 bg-opacity-30'>
                    <tr>
                        <th className='rounded-bl-md'>#</th>
                        <th className='text-left'>Equipo</th>
                        <th>PTS</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th className='rounded-br-md'>DG</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tabla && tabla.map((t, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th>{i + 1}</th>
                                {/* FALTA AGREGAR LOS COLORES DE LOS EQUIPOS DELANTE DEL NOMBRE EN EL MISMO <th></th>*/}
                                <th><Link href={`/ club / ${t.club_url} /? equipo = ${t.equipo_url} & torneo=${t.torneo_url}`}><div className='flex justify-start gap-2 items-center'>{t.equipo} <ColoresEquipo colores={t.colores} hide={true}/></div></Link></th>
                                <th >{t.pts}</th>
                                <th>{t.p_jugados}</th>
                                <th>{t.p_ganados}</th>
                                <th>{t.p_empatados}</th>
                                <th>{t.p_perdidos}</th>
                                <th>{t.g_favor}</th>
                                <th>{t.g_contra}</th>
                                <th>{t.g_dif}</th>

                            </tr>
                        ))
                    }
                </tbody >
            </table >
        </div >
    )
}
export const getServerSideProps = async ({ params: { id } }) => {
    let torneos = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    let equipos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
    console.log(equipos);
    return {
        props: {
            id,
            torneos: torneos.data.torneos,
            equipos: equipos.data
        }
    }

}

