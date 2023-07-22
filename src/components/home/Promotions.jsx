import { images } from '../../constants'
const items = [
  {
    id: 1,
    title: "Cliente Corporativo",
    description:
      "Disponemos de ofrecer seguridad y seriedad ante el desarrollo del proyecto a ejecutar. Entendemos la importancia de construir planes de forma sólida y eficientes para satisfacer las necesidades de nuestros clientes. Con una amplia experiencia en la construcción de todo tipo de construcción en general, nos enorgullece ofrecer soluciones de alta calidad y resultados sobresalientes.",
    image1:
      images.Home1,
    image2:
    images.Home2,
    class: "first-des flex items-center justify-between  ",
  },
  {
    id: 2,
    title: "Cliente Residencial",
    description:
      "Queremos ayudarlo a construir la casa de sus sueños. Nuestro equipo de profesionales está listo para ayudarlo a construir su hogar, desde la planificación hasta la finalización. Con una amplia experiencia en la construcción de viviendas. Contáctenos para recibir una cotización gratuita hoy mismo.",
    image1:
      images.Home4,
    image2:
      images.Home3,
    class: "first-des-reverse flex items-center justify-between pt-10",
  },
];

export default function Promotions() {
  return (
    <div className="">
      <div className="container mx-auto px-8 py-10 md:px-28 md:py-16">
        {items.map((item, index) => (
          <div key={index} className={item.class}>
            <div className="des-text md:w-2/5 text-left text-base">
              <h2 className="text-5xl font-circular-medium tracking-wide text-blue-900 md:text-5xl lg:text-start text-center">
                {item.title}
              </h2>
              <p className="mt-6 text-lg font-circular leading-8 text-gray-800 text-justify">
                {item.description}
              </p>
            </div>
            <div className="image relative w-1/2 flex justify-between">
              <img
                className="w-1/2 h-36 object-cover rounded-md shadow-md"
                src={item.image1}
                alt={item.title}
              />
              <img
                className="w-1/2 h-36 object-cover rounded-md shadow-md absolute top-0 right-0"
                src={item.image2}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
