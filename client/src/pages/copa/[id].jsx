import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Copa({ id }) {
  return (
    <div>
      <Header />
      <section>
        <h1>{id}</h1>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  // Obtener los IDs de las copas desde alguna fuente de datos
  const cupIds = ['copa1', 'copa2', 'copa3']; // Ejemplo de IDs de copa

  // Generar las rutas dinámicas
  const paths = cupIds.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  try {
    // Aquí puedes realizar cualquier lógica necesaria para obtener los datos de la copa según su ID
    // Por ejemplo, podrías consultar una base de datos o un servicio API
    return {
      props: {
        id
      },
      revalidate: 60 * 60, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}
