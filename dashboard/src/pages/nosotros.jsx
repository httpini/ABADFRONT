import AcercaDeNosotros from '@/components/AcercaDeNosotros'
import NuestrosTorneos from '@/components/NuestrosTorneos'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'


export default function nosotros() {
    return (
        <div>
            <Header />
            <section className='flex flex-col'>
                <AcercaDeNosotros />
                <NuestrosTorneos />
            </section>
            <Footer />
        </div>
    )
}
