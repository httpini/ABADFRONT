import React from 'react'
import Link from 'next/link'
import ColoresEquipo from './ColoresEquipo'


export default function TablaPuntajes({ tabla }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
            <h1 className='font-bold text-xl text-center text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-2'>Tabla de Posiciones</h1>
            <table className='w-full'>
                <thead className='font-thin bg-logoOscuro  border-b-2 border-oscuro1 bg-opacity-30'>
                    <tr>
                        <th className='rounded-bl-md text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>#</th>
                        <th className='text-left text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Equipo</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">PTS</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">PJ</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">PG</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">PE</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">PP</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">GF</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">GC</th>
                        <th className='rounded-br-md text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>DG</th>
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

