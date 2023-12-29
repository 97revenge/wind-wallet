import { motion } from "framer-motion";
import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      title: `mb-2 text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-8xl md:text-4xl`,
      subtitle: `hidden lg:block`,
    },
  },
});

type concept<T> = {
  title: T;
  subtitle: T;
};

const styles = {
  title: concept({
    primary: "title",
  }),
  subtitle: concept({
    primary: "subtitle",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Header() {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          <span> Carteira Digital </span>
          <br className={styles.subtitle} />
          Dentro da sua empresa
        </h1>
      </div>
    </>
  );
}
