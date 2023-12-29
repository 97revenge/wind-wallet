import Gallery from "./gallery";
import { styles } from "./style";

export const Index = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.element}>
            <Gallery />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="mb-2 text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-6xl md:text-4xl">
                  Deixe mais fácil a forma que o cliente tem o serviço
                </h2>
                <p className=" text-xl font-medium border-b-2 py-2 leading-relaxed text-gray-600  lg:w-3/3 dark:text-white">
                  Ingressos de eventos e cartões comprovantes , seus usuários
                  podem comprar e adicionar tudo na Google Wallet da sua
                  empresa.
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
                    <span className="font-bold">Menos contas</span> - mais tempo
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
                    Escalabilidade de sistema da Google
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
                    Extremamente eficiente para{" "}
                    <span className="font-bold">Dispositivos Android</span>
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
