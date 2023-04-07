import React from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'

export default function Sanciones({ sanciones }) {
  return (
    <div className='break:col-span-2 justify-self-center self-center flex flex-wrap justify-center w-full break:w-[70%] tarjeta shadow-md shadow-oscuro3 bg-oscuro3'>
      <div className='bg-yellow-300 w-full '>
        <h1 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Sanciones Vigentes</h1>
        {sanciones.length > 0 ? <table className='w-full'>
          <thead className='font-thin '>
            <tr>
              <th  className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50">Equipo</th>
              <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Jugador/a</th>
              <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Expulsión</th>
              <th className="hidden mini:block text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Pena</th>
              <th className="text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 text-center">Vuelve</th>
            </tr>
          </thead>
          <tbody>
            {
              sanciones && sanciones.map((sanc, i) => (
                <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                  {/*LO MISMO FALTA PONERLE COLORES A LOS EQUIPOS*/}
                  <th><Link href={`/equipo/${sanc.equipo}`}>{sanc.equipo}</Link></th>
                  <th className='text-center'>{sanc.nombre}</th>
                  <th className='text-center'>{sanc.f_sancion}</th>
                  <th className='hidden mini:block text-center'>{sanc.sancion}</th>
                  <th className='text-center'>{sanc.vuelta}</th>
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
