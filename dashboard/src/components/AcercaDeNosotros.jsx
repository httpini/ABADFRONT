import Image from 'next/image'
import React from 'react'
import logo from '../../public/ABADlogo.svg'
import jugador from '../../public/jugador.jpg'
import { MdMail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillPersonCheckFill } from 'react-icons/bs'

export default function AcercaDeNosotros() {
    return (
        <div className='mx-4 mini:mx-[50px] md:mx-[100px] mb-10'>
            <h1 className='mt-10 text-xl font-thin'>Acerca de nosotros</h1>
            <div className='flex gap-10 items-start flex-wrap md:flex-nowrap justify-center md:justify-between'>
                <div className='flex flex-wrap flex-col w-full'>
                    <h2 className='text-2xl font-bold mb-5'>ASOCIACION BANCARIA ARGENTINA DE DEPORTES</h2>
                    <p className='text-sm min-w-[400px] lg:min-w-[550px] xl:min-w-[900px]'>Somos una asociación civil sin fines de lucro creada en el año 1913 por un núcleo de bancos con la intención de agrupar en un espacio deportivo a las distintas entidades financieras de entonces.

                        Desde su fundación, esta institución viene organizando la práctica deportiva de numerosas actividades con la activa participación de entidades financieras, compañías vinculadas con éstas y en los últimos años, como parte de un proceso de expansión institucional, se han incorporado en calidad de invitados, clubes, countries, empresas de servicios y comerciales y otras asociaciones civiles.

                        Somos una de las entidades deportivas no federativas (amateur) mas importantes del país y de América, por estructura y por el número de deportistas que practican las distintas disciplinas.

                        Nos identifica la versión recreativa de deporte, opuesta al deporte convencional, competitivo ó federativo y nuestras actividades están orientadas hacia  jugadores amateurs, que privilegien la posibilidad de divertirse y competir observando el “fair play”.

                        En el orden personal, debe asumirse el impacto positivo que esto tiene sobre la salud física y psíquica del individuo. Además, es una herramienta que fomenta la comunicación, optimiza el rendimiento personal, la concentración y el liderazgo.

                        En el orden social, promueve lazos de amistad y camaradería con colegas de otras instituciones ó empresas y agrega un valor de sinergia sobre los grupos humanos que aún dentro de una organización se desempeñan en tareas ó lugares distintos.
                    </p>
                    <br />
                    <div>
                        <p className='flex items-center gap-2'><BsFillPersonCheckFill className='inline text-xl font-black' />Personería Jurídica otorgada el 02/08/1939</p>
                        <p className='flex items-center gap-2'><HiLocationMarker className='inline text-xl font-black' />Maipú 62 - 3º piso - Oficina 17 - C.P. 1084 - Buenos Aires</p>
                        <p className='flex items-center gap-2'><BsFillTelephoneFill className='inline text-xl font-black' />4343-6126 / 4342-2117</p>
                        <p className='flex items-center gap-2'><MdMail className='inline text-xl font-black' /> abadargentina@gmail.com.ar</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center h-[20%] flex-wrap flex-col gap-10'>
                    <Image src={logo} className='max-w-[250px] m-auto'></Image>
                    <Image src={jugador} className='max-w-[200px] rounded-3xl hidden md:block'></Image>
                </div>
            </div>
        </div>
    )
}
