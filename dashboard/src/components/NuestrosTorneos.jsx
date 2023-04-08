import React from 'react'
import cancha from '../../public/cancha.jpg'
import Image from 'next/image'

export default function NuestrosTorneos() {
    return (
        <div className='mini:px-[50px] md:px-[100px] bg-oscuro3 h-full'>
            {/* <div className='flex xl:block items-center'> */}
                <div className='mt-10 flex items-start flex-wrap md:flex-nowrap justify-center w-full xl:-mt-[125px] h-full py-10'>
                    <div className='w-full'>
                        <h2 className='text-2xl font-bold mb-5 text-amarillo drop-shadow-lg shadow-oscuro1'>Nuestros Torneos</h2>
                        <p className='text-sm w-[100%] md:w-[70%] xl:w-[50%]'> Participan anualmente un total de 78 equipos divididos en dos categorías, cada una de ellas se divide entre las divisiones Primera y Segunda, con ascensos y descensos (directos y por promoción)</p>
                        <p>- Libres (sin límite de edad)</p>
                        <p>- Seniors (mayores de 37 años)</p>
                        <p>- Super Seniors (mayores de 48 años)</p>
                    </div>
                </div>
                {/* <div>
                    <Image src={cancha} className='max-h-[200px] object-cover xl:hidden rounded-3xl' />
                </div> */}
            {/* </div> */}
        </div>
    )
}
