import Card from "./card";

const products = [
  "Suport 24HRS",
  "Updates",
  "Modules",
  "Analytics",
  "Reports",
  "Blocks",
  "Templates",
  "Mobile",
  "Components",
];

export const Index = () => {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6 ">
        <div className="mb-32 shadow-xl">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://lh3.googleusercontent.com/rhtZ1kfHrEdkD2dVUIcbX1Hby0W1JsZIFeVYaiBb1iAuGG3wXmC_26DhVkF2-i3gzEWnbf9pxq0D6O_OvqCuRschJS_aoLmizphV3IZ_ZsAecLTW8Mw"
                  alt="Google Wallet Icon"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 pb-2 text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-5xl sm:text-3xl ">
                    Quais produtos podemos oferecer :
                  </h2>
                  <p className="mb-6 pb-2  mx-auto text-xl font-medium  text-gray-600 dark:text-gray-300">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div className="grid gap-x-6 grid-cols-3 grid-rows-3">
                    {products.map((item, index) => {
                      return (
                        <>
                          <Card role={item} key={index} />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
