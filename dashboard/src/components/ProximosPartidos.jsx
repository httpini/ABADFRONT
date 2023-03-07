import React from 'react'
import TarjetaPartido from './TarjetaPartido'
import Carousel from 'better-react-carousel'

export default function ProximosPartidos({ partidos }) {
    return (
        <Carousel
            responsiveLayout={[
                { breakpoint: 640, cols: 1, rows: 1, gap: 25, loop: true, autoplay: 3000 },
                { breakpoint: 800, cols: 2, rows: 1, gap: 25, loop: true, autoplay: 3000 },
                { breakpoint: 1280, cols: 3, rows: 1, gap: 25, loop: true, autoplay: 3000 },
                { breakpoint: 5000, cols: 4, rows: 1, gap: 25, loop: true, autoplay: 3000 },
            ]}
            className='justify-around w-[50vh] gap-3'>
            {
                partidos && partidos.map((p, i) => (
                    <Carousel.Item key={i}>
                        <TarjetaPartido data='' />
                    </Carousel.Item>
                ))
            }
        </Carousel >
    )
}
