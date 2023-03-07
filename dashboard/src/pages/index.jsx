import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProximosPartidos from "@/components/ProximosPartidos";

export default function Home() {
  
  return (
    <div className="h-screen">
      <Header />
      <Banner />
      <h2 className="font-bold text-center p-5 underline">Partidos a jugar</h2>
      <ProximosPartidos />
      <br />
      <h2 className="font-bold text-center p-5 underline">Partidos jugados</h2>
      <ProximosPartidos />
      <Footer />
    </div>
  )
}