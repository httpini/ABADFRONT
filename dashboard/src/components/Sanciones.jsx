import React from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'

export default function Sanciones({sanciones}) {
  console.log(sanciones)
  return (
    <div className='md:col-span-2 flex flex-wrap justify-center w-full'>
      <div className='bg-yellow-300 w-full md:w-auto'>
        <h1>Sanciones</h1>
        <table className='w-full'>
          <thead className='bg-white'>
            <tr>
              <th>Equipo</th>
              <th>Jugador/a</th>
              <th>Fecha de Sancion</th>
              <th>Pena Aplicada</th>
              <th>Vuelve a Jugar</th>
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
      </div>
    </div>
  )
}
