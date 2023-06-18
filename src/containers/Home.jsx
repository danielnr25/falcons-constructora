import Banner from "../components/home/Banner";
import Clients from "../components/home/Clients";
import Feature from "../components/home/Feature";
import Promotions from "../components/home/Promotions";
import Testimonials from "../components/home/Testimonials";
import TestimonialsLToR from "../components/home/TestimonialsLToR";
import Layout from "../hocs/Layout"
import { useEffect } from "react";

const Home = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <Layout title="FALCONSA CONSTRUCTORA" description="Líder en el sector de la construcción civil en la región norte del Perú. Nuestra meta es ejecutar proyectos de construcción de alta calidad que satisfagan por completo las necesidades de nuestros clientes, ofreciendo resultados reconocidos por su excelencia y belleza. A través de prácticas sostenibles y respeto al medio ambiente, contribuimos activamente al crecimiento de la región y buscamos establecer una reputación como empresa constructora comprometida con la calidad, la innovación y el desarrollo regional.">
        <Banner />
        <Promotions />
        <Feature />
        <Testimonials />
        <TestimonialsLToR />
        <Clients />
      </Layout>
   )
}

export default Home