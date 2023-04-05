import React from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'

export default function Sanciones({ sanciones }) {
  return (
    <div className='break:col-span-2 justify-self-center self-center flex flex-wrap justify-center w-full break:w-[70%] tarjeta shadow-md shadow-oscuro3 bg-opacity-50 bg-oscuro3'>
      <div className='bg-yellow-300 w-full '>
        <h1 className='md:text-center font-bold text-xl border-b-2 border-oscuro1'>Sanciones</h1>
        {sanciones.length > 0 ? <table className='w-full'>
          <thead className='font-thin bg-claro1 bg-opacity-70'>
            <tr>
              <th className='rounded-bl-md'>Equipo</th>
              <th>Jugador/a</th>
              <th>Fecha de Sancion</th>
              <th>Pena Aplicada</th>
              <th className='rounded-br-md'>Vuelve a Jugar</th>
            </tr>
          </thead>
          <tbody>
            {
              sanciones && sanciones.map((sanc, i) => (
                <tr key={i}>
                  {/*LO MISMO FALTA PONERLE COLORES A LOS EQUIPOS*/}
                  <th><Link href={`/equipo/${sanc.equipo}`}>{sanc.equipo}</Link></th>
                  <th>{sanc.nombre}</th>
                  <th>{sanc.f_sancion}</th>
                  <th>{sanc.sancion}</th>
                  <th>{sanc.vuelta}</th>
                </tr>
              ))
            }
          </tbody>
        </table>
          : <div className='p-5 flex justify-center items-center h-full'>
            <h2 className='text-center w-[200px]'>Aún no hay sancionados</h2></div>}
      </div>
    </div>
  )
}
