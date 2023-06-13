const items = [
  {
    id: 1,
    title: "Cliente Corporativo",
    description:
      "Entendemos la importancia de construir planes industriales sólidos y eficientes para satisfacer las necesidades de nuestros clientes en la industria. Con una amplia experiencia en la construcción de losas de concreto, estructuras metálicas y el alquiler de maquinaria, nos enorgullece ofrecer soluciones de alta calidad y resultados sobresalientes.",
    image1:
      "https://images.pexels.com/photos/15834397/pexels-photo-15834397/free-photo-of-hombre-trabajando-industria-casco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/8960987/pexels-photo-8960987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class: "first-des flex items-center justify-between  ",
  },
  {
    id: 2,
    title: "Cliente Residencial",
    description:
      "Queremos ayudarlo a construir la casa de sus sueños. Nuestro equipo de profesionales está listo para ayudarlo a construir su hogar, desde la planificación hasta la finalización. Con una amplia experiencia en la construcción de casas, nos enorgullece ofrecer soluciones de alta calidad y resultados sobresalientes. Contáctenos para recibir una cotización gratuita hoy mismo.",
    image1:
      "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
