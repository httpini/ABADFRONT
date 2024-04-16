import Image from 'next/image'
import React from 'react'
import banner from '../../public/banner2.jpg'

export default function Banner() {
  return (
    <div className='relative'>
      {/* <h1 className='absolute left-10 text-4xl text-[white] top-10'>Torneos ABAD</h1> */}
      <Image src={banner} className='w-full object-cover h-[150px]' alt='banner'></Image>
    </div>
  )
}


