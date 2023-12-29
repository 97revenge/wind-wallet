export const Index = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-red-100 to-orange-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="mb-6 pb-2 text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-5xl sm:text-3xl">
              A Tailus Blocks subscription gives you access to our components
              and more.
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">
                  Organisation
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        35
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          %
                        </span>
                        <span className="block text-xl text-orange-600 font-bold">
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>First premium advantage</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>Third advantage donate to project</span>
                  </li>
                </ul>
                <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                  <a
                    href="tel:+24300"
                    className="flex space-x-2 items-center text-orange-600"
                  >
                    <img
                      src="https://api.iconify.design/logos:whatsapp-icon.svg"
                      alt=""
                      className="object-fill w-[30px] "
                    />
                    <span className="font-semibold text-green-500">
                      WhatsApp
                    </span>
                  </a>
                </p>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-orange-600 hover:bg-orange-700 active:bg-orange-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">Saiba Mais</span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>First premium advantage</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>Second advantage weekly</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>Third advantage donate to project</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-orange-500 font-semibold">
                      &check;
                    </span>
                    <span>Fourth, access to all components weekly</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <img
                    className="w-16 lg:w-24"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg"
                    loading="lazy"
                    alt="airbnb"
                  />
                  <img
                    className="w-8 lg:w-16"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg"
                    loading="lazy"
                    alt="bissell"
                  />
                  <img
                    className="w-6 lg:w-12"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg"
                    loading="lazy"
                    alt="ge"
                  />
                  <img
                    className="w-20 lg:w-28"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg"
                    loading="lazy"
                    alt="microsoft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
