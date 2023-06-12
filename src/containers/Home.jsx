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
      <Layout>
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