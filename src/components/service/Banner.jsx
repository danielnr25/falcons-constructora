import { Link } from "react-router-dom";

export default function Banner() {
  return (
   <div className="px-8 py-10 sm:px-8 sm:py-12 lg:px-8">
   <div className="flex flex-col sm:flex-row  items-center gap-6">
     <p className="mt-1 max-w-5xl text-[17px] leading-7 text-gray-800 md:text-lg sm:leading-8 text-justify md:px-3">
     Somos especialistas en ofrecer soluciones integrales para todo tipo de proyectos inmobiliarios. Contamos con un equipo altamente cualificado con capacidad para atenderle en cualquier aspecto relacionado con los proyectos de construcción.
     </p>
     <div className="mt-6 md:ml-20 sm:mt-0 flex items-center justify-center ">
       <Link href="/price">
         <button className="bg-blue-700 hover:bg-blue-800 text-white lg:px-6  lg:py-3 rounded-lg px-8 py-4 uppercase">
           Descargar PDF de servicios
         </button>
       </Link>
     </div>
   </div>
 </div>
  );
}
