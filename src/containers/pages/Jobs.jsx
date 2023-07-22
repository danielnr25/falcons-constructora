import JobsList from "../../components/Jobs/JobsList";
import Layout from "../../hocs/Layout";
const Jobs = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="relative w-screen">
          <img
            src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Service"
            className="w-full h-80 object-cover shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 h-full p-4 md:p-0 md:pl-10 bg-gray-800 bg-opacity-75 text-white">
            <h2 className="text-4xl mt-20 md:text-7xl font-circular-medium mb-2 tracking-wide leading-7">
             Nuestras Obras
            </h2>
            <p className="mb-4 max-w-2xl text-lg leading-8 text-gray-100 ">
            Constructora Falconsa cuenta con una reconocida experiencia en Chiclayo y toda la región norte del Perú, que queda avalada por cualquiera de nuestros proyectos finalizados.
            </p>
          </div>
        </div>
      </div>
      <JobsList />
    </Layout>
  );
};

export default Jobs;
