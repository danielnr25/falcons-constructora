import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div className="">
      <div className="px-6 py-20 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-circular-medium tracking-wide text-blue-900 sm:text-4xl">
            EXPERTOS EN PROYECTOS DE CONSTRUCCIÓN
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-800">
          Somos una empresa constructora en Chiclayo, dedicada a la Construcción en General con muchos años de experiencia, mediante la supervisión y ejecución de proyectos de construcción, garantizando la seguridad y confianza al culminar el proyecto indicado.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/price">
              <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded-lg items-center ">
                Descargar PDF de servicios
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
