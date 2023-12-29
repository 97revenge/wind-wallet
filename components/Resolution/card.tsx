import { wx, W } from "windstitch";
import List from "./list";

const concept = wx({
  variants: {
    primary: {
      container: `mt-5 sm:mt-10 lg:mt-0 lg:col-span-5`,
      element: `space-y-6 sm:space-y-8`,
      item: `space-y-2 md:space-y-4`,
      heading: `mb-2 text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-6xl md:text-4xl`,
      description: `text-xl font-medium border-b-2 py-2 leading-relaxed text-gray-600  lg:w-3/3 dark:text-white`,
    },
  },
});

type concept<T> = {
  container: T;
  element: T;
  item: T;
  heading: T;
  description: T;
};

const styles = {
  container: concept({
    primary: "container",
  }),
  element: concept({
    primary: "element",
  }),
  item: concept({
    primary: "item",
  }),
  heading: concept({
    primary: "heading",
  }),
  description: concept({
    primary: "description",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Card() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.element}>
          <div className={styles.item}>
            <h2 className={styles.heading}>
              Deixe mais fácil a forma que o cliente tem o serviço
            </h2>
            <p className={styles.description}>
              Ingressos de eventos e cartões comprovantes , seus usuários podem
              comprar e adicionar tudo na Google Wallet da sua empresa.
            </p>
          </div>
          <List />
        </div>
      </div>
    </>
  );
}
