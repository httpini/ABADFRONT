import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProximosPartidos from "@/components/ProximosPartidos";
import axios from "axios";

export default function Home({ partidosConfirmados, partidosDisputados }) {
  // console.log(partidosConfirmados, partidosDisputados);
  return (
    <div className="h-screen">
      <Header />
      <section>
        <Banner />
        <h2 className="font-bold text-center p-5 underline">Partidos a jugar</h2>
        <ProximosPartidos partidos={[1, 2, 3, 4, 5, 6, 7]} data={partidosConfirmados}/>
        <br />
        <h2 className="font-bold text-center p-5 underline">Partidos jugados</h2>
        <ProximosPartidos partidos={[1, 2, 3]} data={partidosDisputados} />
      </section>
      <Footer />
    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    let partidosDisputados = await axios.get('http://localhost:3500/api/partidos-disputados');
    let partidosConfirmados = await axios.get('http://localhost:3500/api/partidos-confirmados');
    return {
      props: {
        partidosDisputados: partidosDisputados.data,
        partidosConfirmados: partidosConfirmados.data
      }
    }
  } catch (error) {
    console.log(error);
  }
}