import React from 'react'
import Puntaje from './Puntaje'
import formateo from '../../utils/getDay';
import Link from 'next/link';

export default function TarjetaPartido({ data }) {
  const dia = formateo(data.dia, data.hora)
  return (
    <div className='w-[300px] bg-logoOscuro p-3 rounded-md m-2 shadow-md shadow-logoOscuro'>
      <div className='flex justify-between'>
        <h3 className='text-claro1'>{dia} {data.dia.slice(0, -5)}</h3>
        <h3 className='text-logoClaro'>{data.hora}</h3>
      </div>
      <div className='w-full h-[100px] bg-claro1 p-1 flex gap-1 items-center rounded-t-md'>
        <Puntaje equipo={data.local_name} goles={data.local_goles} colores={data.local_colores} local={true} />
        <div className='h-[75%] w-[1px] bg-logoOscuro'></div>
        <Puntaje equipo={data.visitante_name} goles={data.visitante_goles} colores={data.visitante_colores} local={false} />
      </div>
      <div className='text-center  flex justify-around bg-oscuro3 rounded-b-md '>
        <Link href={data.predio_url ? data.predio_url : '#'} target={data.predio_url ? "_blank" : ''} style={data.predio_url ? { cursor: 'pointer' } : { cursor: 'default' }} >{data.predio_name ? data.predio_name : 'a confirmar'}</Link>
        {/* <p className='cursor-pointer'>{data.predio_name ? data.predio_name : 'predio a confirmar'}</p> */}
        <p>-</p>
        <p>{data.torneo_name}</p>
      </div>
    </div>
  )
}
