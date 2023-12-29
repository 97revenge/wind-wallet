import { wx, W } from "windstitch";
import Card from "./card";
import Heading from "./heading";
import Description from "./description";

const products = [
  "QR CODE",
  "Wallets",
  "Cupons",
  "Ingressos",
  "Reservas",
  "Acessos",
  "Análise",
  "Suporte ",
  "Develop",
];

const concept = wx({
  variants: {
    primary: {
      container: `container w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12`,
      elem: `px-6 py-12 md:px-12`,
      grid: `grid gap-x-6 grid-cols-3 grid-rows-3`,
    },
  },
});

type concept<T> = {
  container: T;
  elem: T;
  grid: T;
};

const styles = {
  container: concept({
    primary: "container",
  }),
  elem: concept({
    primary: "elem",
  }),
  grid: concept({
    primary: "grid",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Section() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.elem}>
          <Heading />
          <Description />

          <div className={styles.grid as string}>
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
    </>
  );
}
