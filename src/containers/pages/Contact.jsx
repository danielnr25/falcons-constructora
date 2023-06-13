import Layout from "../../hocs/Layout";
import { PhoneIcon, InboxIcon, HomeIcon } from "@heroicons/react/outline";

const Contact = () => {
  return (
    <Layout>
      <div>
        <div className="relative isolate bg-lights-sun">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-3xl font-circular-medium tracking-wide text-gray-900">
                  Ponerse en contacto
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-800">
                  Para cualquier contacto o comunicación con la empresa, pueden
                  utilizar los siguientes medios:
                </p>
                <dl class="mt-10 space-y-6 text-lg leading-7 text-gray-600">
                  <div class="flex gap-x-4 items-center">
                    <dt class="flex-none">
                      <span class="sr-only">Telephone</span>
                      <HomeIcon
                        className="w-6 h-6 text-gray-900/50 hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-lg font-circular-book tracking-wide">Chiclayo - Perú</dd>
                  </div>
                  <div class="flex gap-x-4 items-center">
                    <dt class="flex-none">
                      <span class="sr-only">Telephone</span>
                      <PhoneIcon
                        className="w-6 h-6  text-gray-900/50 hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        class="hover:text-gray-900 text-lg font-circular-book tracking-wide"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (555) 234-5678
                      </a>
                    </dd>
                  </div>
                  <div class="flex gap-x-4 items-center">
                    <dt class="flex-none">
                      <span class="sr-only">Telephone</span>
                      <InboxIcon
                        className="w-6 h-6  text-gray-900/50 hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        class="hover:text-gray-900 text-lg font-circular-book tracking-wider"
                        href="mailto:hello@example.com"
                      >
                        falconsa@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form
              action="#"
              method="POST"
              class="px-6 pb-10 pt-5 sm:pb-20 lg:px-8 lg:py-20"
            >
              <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      for="first-name"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="last-name"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Apellidos
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="email"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="phone-number"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Teléfono
                    </label>
                    <div class="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autocomplete="tel"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Mensaje
                    </label>
                    <div class="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="mt-8 flex justify-end">
                  <button
                    type="submit"
                    class="rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
