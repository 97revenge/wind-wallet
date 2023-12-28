import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      paragraph: `mx-auto text-xl font-medium border-b-2 py-2 leading-relaxed text-gray-600  lg:w-2/3 dark:text-white`,
      anchor: `hover:underline dark:text-gray-200`,
    },
  },
});

type concept<T> = {
  paragraph: T;
  anchor: T;
};

const styles = {
  paragraph: concept({
    primary: "paragraph",
  }),
  anchor: concept({
    primary: "anchor",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Description() {
  return (
    <>
      <p className={styles.paragraph}>
        Integre facilmente a{" "}
        <a
          href="https://developers.google.com/wallet?hl=pt-br#get-started"
          className={styles.anchor}
        >
          Carteira do Google{" "}
        </a>
        ao seu negócio, permitindo que clientes adicionem cartões de fidelidade,
        ingressos e até chaves digitais. Segura e versátil, oferece notificações
        personalizadas e suporte a uma variedade de casos de uso.
      </p>
    </>
  );
}
