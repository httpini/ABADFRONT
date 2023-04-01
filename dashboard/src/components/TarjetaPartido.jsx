import React from 'react'
import Puntaje from './Puntaje'
import hola from '../../utils/getDay';
import Link from 'next/link';

export default function TarjetaPartido({ data }) {
  const dia = hola(data.dia, data.hora)
  return (
    <div className='w-[350px] bg-blue-300 p-3 rounded-md'>
      <div className='flex justify-between'>
        <h3>{dia} {data.dia}</h3>
        <h3>{data.hora}</h3>
      </div>
      <div className='w-full h-[100px] bg-slate-500 p-1 flex gap-1 items-center'>
        <Puntaje equipo={data.local_name} goles={data.local_goles} colores={data.local_colores} />
        <div className='h-[75%] w-[1px] bg-white'></div>
        <Puntaje equipo={data.visitante_name} goles={data.visitante_goles} colores={data.visitante_colores} />
      </div>
      <div className='text-center  flex justify-around bg-slate-200'>
        <Link href={data.predio_url ? data.predio_url : '#'} target={data.predio_url ? "_blank" : ''} style={data.predio_url ? { cursor: 'pointer' } : { cursor: 'default' }} >{data.predio_name ? data.predio_name : 'a confirmar'}</Link>
        {/* <p className='cursor-pointer'>{data.predio_name ? data.predio_name : 'predio a confirmar'}</p> */}
        <p>-</p>
        <p>{data.torneo_name}</p>
      </div>
    </div>
  )
}
