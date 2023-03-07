import React from 'react'

export default function TarjetaPartido({ data }) {
  return (
    <div className='w-[300px] bg-blue-300 p-3'>
      <div className='flex justify-between'>
        <h3>Viernes 10/03/2023</h3>
        <h3>17:00hs</h3>
      </div>
      <div className='w-full h-[100px] bg-slate-500 p-1 flex gap-1'>
        <div className='bg-slate-700 h-full w-full'>hoa</div>
        <div className='bg-slate-700 h-full w-[70%]'>partido</div>
      </div>
      <h3 className='text-center cursor-pointer bg-slate-200'>Información de partido</h3>
    </div>
  )
}
