import React from 'react'
import Link from 'next/link'
import ColoresEquipo from './ColoresEquipo'


export default function TablaPuntajes({ tabla }) {
    return (
        <div className='tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
            <h1 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Tabla de Posiciones</h1>
            <table className='w-full'>
                <thead className='font-thin border-b-2 border-oscuro1 bg-opacity-30'>
                    <tr>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>#</th>
                        <th className='text-left text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Equipo</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">PTS</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">PJ</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">PG</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">PE</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">PP</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">GF</th>
                        <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">GC</th>
                        <th className='text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center'>DG</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tabla && tabla.map((t, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th>{i + 1}</th>
                                {/* FALTA AGREGAR LOS COLORES DE LOS EQUIPOS DELANTE DEL NOMBRE EN EL MISMO <th></th>*/}
                                <th><Link href={`/club/${t.club_url}/?equipo=${t.equipo_url}&torneo=${t.torneo_url}`}><div className='flex justify-start gap-2 items-center  hover:text-amarillo hover:font-bold'>{t.equipo} <ColoresEquipo colores={t.colores} hide={true}/></div></Link></th>
                                <th className='text-center' >{t.pts}</th>
                                <th className='text-center'>{t.p_jugados}</th>
                                <th className='text-center'>{t.p_ganados}</th>
                                <th className='text-center'>{t.p_empatados}</th>
                                <th className='text-center'>{t.p_perdidos}</th>
                                <th className='text-center'>{t.g_favor}</th>
                                <th className='text-center'>{t.g_contra}</th>
                                <th className='text-center'>{t.g_dif}</th>

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

