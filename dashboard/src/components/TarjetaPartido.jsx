import React from 'react'
import Puntaje from './Puntaje'

export default function TarjetaPartido({ data }) {
  console.log(data);
  return (
    <div className='w-[350px] bg-blue-300 p-3 rounded-md'>
      <div className='flex justify-between'>
        <h3>Viernes {data.dia}</h3>
        <h3>{data.hora}</h3>
      </div>
      <div className='w-full h-[100px] bg-slate-500 p-1 flex gap-1 items-center'>
        <Puntaje equipo={data.local_name} goles={data.local_goles} colores={data.local_colores} />
        <div className='h-[75%] w-[1px] bg-white'></div>
        <Puntaje equipo={data.visitante_name} goles={data.visitante_goles} colores={data.visitante_colores}/>
      </div>
      <div className='text-center cursor-pointer flex justify-around bg-slate-200'>
        <p>Predio</p>
        <p>-</p>
        <p>{data.torneo_name}</p>
      </div>
    </div>
  )
}
