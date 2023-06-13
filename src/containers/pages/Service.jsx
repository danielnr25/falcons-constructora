import Banner from "../../components/service/Banner";
import ServiceList from "../../components/service/ServiceList";
import Layout from "../../hocs/Layout";

const Service = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="relative w-screen">
          <img
            src="https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Service"
            className="w-full h-80 object-cover shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 h-full p-4 md:p-0 md:pl-10 bg-gray-800 bg-opacity-75 text-white">
            <h2 className="text-4xl mt-20 md:text-7xl font-circular-medium mb-2 tracking-wide leading-7">Servicios</h2>
            <p className="mb-4 max-w-2xl text-lg leading-8 text-gray-100 ">
              Conozca nuestros servicios y comprenderá por qué Constructora
              Oviedo es mucho más que una simple empresa constructora.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
              DESCARGAR PDF DE SERVICIOS
            </button>
          </div>
        </div>
      </div>
      <Banner />
      <ServiceList />
    </Layout>
  );
};

export default Service;
