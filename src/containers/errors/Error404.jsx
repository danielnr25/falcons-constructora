import { Link } from "react-router-dom"

const Error = {
   title: 'Página no encontrada',
   description: 'Lo sentimos, no pudimos encontrar la página que estás buscando.',
}

const { title, description } = Error

const Error404 = () => {
   return(
      <main className="grid min-h-full place-items-center bg-slate-100 px-6 py-20 sm:py-20 lg:px-10">
      <div className="text-center">
         <p className="text-base font-semibold text-blue-700">404</p>
         <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>
         <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
         <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
               to="/" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
               Regresar al inicio
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
               Soporte de contacto <span aria-hidden="true">&rarr;</span>
            </a>
         </div>
      </div>
   </main>
   )
}

export default Error404;