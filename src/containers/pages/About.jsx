import { Link } from "react-router-dom";
import Layout from "../../hocs/Layout";

const About = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 px-10 lg:px-20">
        <div className="col-span-12 lg:col-span-6">
          <img
            src="https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full object-cover rounded-lg shadow-blue-100"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <h1 className="font-circular-medium lg:text-2xl text-xl mb-6 text-gray-800 tracking-wider">
            SOLUCIONES INTEGRALES EN PROYECTOS INMOBILIARIOS EN CHICLAYO
          </h1>
          <p className="text-gray-800 text-justify mb-6">
            Misión: coordinar, supervisar y ejecutar proyectos de construcción
            que satisfagan por completo las necesidades de los clientes, con
            mano de obra experta y cualificada, y las herramientas óptimas para
            ofrecer un resultado de calidad, con respeto y cuidado del medio
            ambiente.
          </p>
          <p className="text-gray-800 text-justify mb-6">
            Visión: ser la empresa constructora líder en la región norte del
            Perú contribuyendo de manera activa al crecimiento de la región, y
            ofreciendo como resultado obras reconocidas por su calidad y
            belleza.
          </p>
          <div>
            <button className="uppercase bg-blue-700 py-2 px-4 rounded-lg text-white hover:bg-blue-800">
              Descargar broshure
            </button>
          </div>
        </div>
      </div>

      <div class="py-10 px-10 sm:mt-12 lg:px-20 mb-20">
        <dl class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt class="tracking-wide font-circular-medium text-gray-900 lg:text-2xl text-xl">
              Sobre Nosotros
            </dt>
            <dd class="mt-1 text-gray-700 text-justify">
              CONSTRUCTORA OVIEDO S.A.C a lo largo de los años ha adquirido el
              conocimiento y la experiencia necesaria para ofrecer a los
              clientes un servicio de calidad, y desempeñar las labores
              encomendadas, relacionadas con la ejecución de proyectos
              inmobiliarios en Piura y la elaboración de expedientes técnicos.
            </dd>
          </div>
          <div>
            <dt class="tracking-wide font-circular-medium text-gray-900 lg:text-2xl text-xl">
              Lo que hacemos
            </dt>
            <dd class="mt-1 text-gray-700 text-justify">
              Somos una empresa constructora en Piura especializada en prestar
              servicios integrales para la ejecución de proyectos inmobiliarios
              en Piura. Entre nuestros servicios se encuentran: ejecución de
              obras de ingeniería civil, demoliciones, alquiler de maquinaria
              pesada, o la elaboración y ejecución de proyectos de construcción
            </dd>
          </div>
          <div>
            <dt class="tracking-wide font-circular-medium text-gray-900 lg:text-2xl text-xl">
              Nuestra Resposabilidad
            </dt>
            <dd class="mt-1 text-gray-700 text-justify">
              CONSTRUCTORA OVIEDO S.A.C es mucho más que una simple empresa
              constructora. Desde el principio, contribuimos y nos implicamos
              con el desarrollo social del Perú, así como respetamos tanto la
              normativa referente a los temas de seguridad ocupacional como el
              medio ambiente.
            </dd>
          </div>
        </dl>
      </div>
    </Layout>
  );
};

export default About;
