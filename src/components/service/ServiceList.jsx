import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Ejecución de obras de ing. civil",
    description:
      "Servicio cualificado de planeamiento, diseño y ejecución de proyectos de construcción civil.",
    image:
      "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Alquiler de maquinaria pesada",
    description:
      "Alquiler de maquinaria pesada y otros equipos para sectores como la construcción o industria.",
    image:
      "https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Consultorías en construcción",
    description:
      "Equipo cualificado y con experiencia probada para poner sus conocimientos al servicio de su proyecto.",
    image:
      "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Elaboración de proyectos",
    description:
      "Cualificados para ofrecerle el mejor servicio de planeamiento y diseño de proyectos de construcción..",
    image:
      "https://images.pexels.com/photos/4792479/pexels-photo-4792479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Ejecución de proyectos arquitectónicos",
    description:
      "Coordinación y ejecución de toda clase de proyectos arquitectónicos del cliente.",
    image:
      "https://images.pexels.com/photos/7642088/pexels-photo-7642088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Demoliciones en general",
    description:
      "Demoliciones de calidad y orientadas a la máxima eficiencia para cualquier tipo de edificación.",
    image:
      "https://images.pexels.com/photos/12455093/pexels-photo-12455093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function ServiceList() {
  return (
    <div className="lg:py-10 space-y-12 flex justify-center py-10 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt=""
              className="rounded-t-lg object-cover cursor-grabbing w-full h-60"
            />
            <div className="p-6">
              <h2 className="text-xl font-circular-medium tracking-wide text-blue-900 md:text-2xl lg:text-start text-center">{item.title}</h2>
              <p className="mt-2 leading-6 text-gray-800 text-justify">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link to="/blog" className="text-blue-600 hover:underline">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
