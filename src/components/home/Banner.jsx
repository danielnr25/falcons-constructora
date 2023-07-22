import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="overflow-hidden py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {" "}
          {/* Added 'items-center' class */}
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="text-5xl font-circular-medium tracking-wide text-blue-900 md:text-5xl lg:text-start text-center">
                Apostamos por el desarrollo del Perú
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 text-justify">
              Somos una empresa constructora en Chiclayo, especializada en la supervisión y ejecución de obras y proyectos de construcción, nos encargamos de la elaboración de expedientes técnicos y diseño de tu proyecto a gusto del cliente. Empleamos mano de obra altamente calificada y disponemos de las herramientas y del material adecuado para ofrecer un resultado de calidad.
              </p>
              <button className="mt-8 bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded-lg items-center">¿Qué necesita construir?</button>
            </div>
          </div>
          <div className="flex lg:order-first">
            <img
              src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image screenshot"
              className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
