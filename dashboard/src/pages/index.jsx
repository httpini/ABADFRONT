import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProximosPartidos from "@/components/ProximosPartidos";
import axios from "axios";
import Head from "next/head";

export default function Home({ partidosConfirmados, partidosDisputados }) {
  // console.log(partidosConfirmados, partidosDisputados);
  return (
    <div className="h-screen relative">
      <Header />
      <section>
        <Banner />
        <h2 className="font-bold text-center p-5 underline">Partidos a jugar</h2>
        <ProximosPartidos data={partidosConfirmados} />
        <br />
        <h2 className="font-bold text-center p-5 underline">Partidos jugados</h2>
        <ProximosPartidos data={partidosDisputados} />
      </section>
      <Footer />
    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    let calls = await Promise.all([
      axios.get('http://localhost:3500/api/partidos-disputados'),
      axios.get('http://localhost:3500/api/partidos-confirmados')
    ])
    
    return {
      props: {
        partidosDisputados: calls[0].data,
        partidosConfirmados: calls[1].data
      }
    }
  } catch (error) {
    console.log(error);
  }
}