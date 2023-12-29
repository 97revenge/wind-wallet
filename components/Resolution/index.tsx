export const Index = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center ">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <img
                  className="rounded-3xl"
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-5">
                <img
                  className="rounded-xl "
                  src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="mb-2 text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-6xl md:text-4xl">
                  Collaborative tools to design user experience
                </h2>
                <p className=" text-xl font-medium border-b-2 py-2 leading-relaxed text-gray-600  lg:w-2/3 dark:text-white">
                  Use our tools to explore your ideas and make your vision come
                  true. Then share your work easily.
                </p>
              </div>

              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-500 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Less routine</span> – more
                    creativity
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-500 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Hundreds of thousands saved
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-500 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Scale budgets <span className="font-bold">efficiently</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};