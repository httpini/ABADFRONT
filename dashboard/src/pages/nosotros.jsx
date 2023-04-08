import AcercaDeNosotros from '@/components/AcercaDeNosotros'
import NuestrosTorneos from '@/components/NuestrosTorneos'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'


export default function nosotros() {
    return (
        <div>
            <Header />
            <section className='mx-4 mini:mx-[50px] md:mx-[100px] mb-10'>
                <AcercaDeNosotros />
                <NuestrosTorneos />
            </section>
            <Footer />
        </div>
    )
}
