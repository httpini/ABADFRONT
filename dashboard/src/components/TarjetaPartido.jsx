import React from 'react'
import Puntaje from './Puntaje'

export default function TarjetaPartido({ data, jugado = false }) {
  console.log(jugado);

  return (
    <div className='w-[250px] bg-blue-300 p-3 rounded-md'>
      <div className='flex justify-between'>
        <h3>Viernes 10/03/2023</h3>
        <h3>17:00hs</h3>
      </div>
      <div className='w-full h-[100px] bg-slate-500 p-1 flex gap-1 items-center'>
        <Puntaje equipo='equipo 1' goles={2} colores={['black', 'red', 'green']} />
        <div className='h-[75%] w-[1px] bg-white'></div>
        <Puntaje equipo='equipo 2' goles={0} colores={['blue', 'black']} />
      </div>
      <div className='text-center cursor-pointer flex justify-around bg-slate-200'>
        <p>Predio</p>
        <p>-</p>
        <p>Torneo</p>
        <p>-</p>
        <p>Fecha</p>
      </div>
    </div>
  )
}
