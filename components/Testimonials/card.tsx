export default function Card() {
  return (
    <>
      <div className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-gradient-to-r from-orange-300/50 to-rose-700/70 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
        <img
          className="absolute top-0 h-full w-full object-cover opacity-10"
          src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt=""
        />
        <div className="relative mt-auto w-full ">
          <div className="flex flex-col p-6 lg:px-7 lg:py-8">
            <div className=" ">
              <blockquote className="">
                <a
                  href="https://twitter.com/DougPChandler/status/1740137117940932768"
                  className="text-3xl font-bold text-white sm:text-5xl relative hover:underline"
                >
                  "Eu uso a Carteira virtual do Google mais agora do que antes."
                </a>
              </blockquote>
            </div>

            <div className="mt-10 flex items-center">
              <img
                className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                src="https://pbs.twimg.com/profile_images/125493417/IMG_4775_400x400.JPG"
                alt=""
              />
              <div className="ml-4 text-white">
                <p className="font-bold text-lg dark:text-white ">
                  Doug Chandler
                </p>
                <p className="text-gray-90 mt-0.5 text-sm font-semibold underline">
                  Investidor & Diretor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
