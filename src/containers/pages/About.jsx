import { Link } from "react-router-dom";
import Layout from "../../hocs/Layout";
import { images } from "../../constants";

const data = [
  {
    id: 1,
    title: "Sobre Nosotros",
    description: `CONSTRUCTORA FALCONSA S.A a lo largo de los años ha adquirido el conocimiento y la experiencia necesaria para ofrecer a los clientes un servicio de calidad, y desempeñar las labores encomendadas, relacionadas con la ejecución de proyectos inmobiliarios en Chiclayo y la elaboración de expedientes técnicos.`,
  },
  {
    id: 2,
    title: "Lo que hacemos",
    description: `Somos una empresa constructora en Chiclayo especializada en prestar servicios integrales para la ejecución de proyectos inmobiliarios en Chiclayo. Entre nuestros servicios se encuentran: ejecución de obras de ingeniería civil, demoliciones, elaboración y ejecución de proyectos de construcción y la supervisión en general`,
  },
  {
    id: 3,
    title: "Nuestra Resposabilidad",
    description: `CONSTRUCTORA FALCONSA S.A es mucho más que una simple empresa constructora. Desde el principio, contribuimos y nos implicamos con el desarrollo social del Perú, así como respetamos tanto la normativa referente a los temas de seguridad lo cual nos obliga a optar por brindarles seriedad y garantía con el Proyecto por realizar.`,
  },
];

const About = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 px-10 lg:px-20">
        <div className="col-span-12 lg:col-span-6">
          <img
            src={images.Empresa}
            alt=""
            className="w-full object-cover rounded-lg shadow-blue-100"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <h1 className="font-circular-medium lg:text-2xl text-xl mb-6 text-gray-800 tracking-wider">
            SOLUCIONES INTEGRALES EN PROYECTOS INMOBILIARIOS EN CHICLAYO
          </h1>
          <p className="text-gray-800 text-justify text-[17px]  leading-8 mb-6">
            Misión: coordinar, supervisar y ejecutar proyectos de construcción que satisfagan por completo las necesidades de los clientes, con mano de obra experta y calificada, y las herramientas óptimas para ofrecer un resultado de calidad, con respeto y cuidado del medio ambiente.
          </p>
          <p className="text-gray-800 text-justify text-[17px] leading-8 mb-6">
            Visión: ser la empresa constructora líder en la región norte del Perú contribuyendo de manera activa al crecimiento de la región, y ofreciendo como resultado obras reconocidas por su calidad y belleza.
          </p>
          <div>
            <button className="uppercase bg-blue-700 py-2 px-4 rounded-lg text-white hover:bg-blue-800">
              Descargar broshure
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 px-10  lg:px-20 mb-20">
        <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className="bg-white py-5 px-5 rounded-lg shadow-lg">
              <dt className="text-lg lg:text-xl text-center font-circular-medium  leading-6 text-indigo-900 uppercase">
                {item.title}
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-800 text-justify">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Layout>
  );
};

export default About;
