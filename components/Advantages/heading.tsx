import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      container: `m-auto text-center lg:w-8/12 xl:w-7/12 `,
      heading: `mb-6 pb-2 text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white lg:text-6xl sm:text-3xl`,
      description: `mx-auto text-xl font-medium  py-2 leading-relaxed text-gray-600  lg:w-2/3 dark:text-white`,
    },
  },
});

type concept<T> = {
  container: T;
  heading: T;
  description: T;
};

const styles = {
  container: concept({
    primary: "container",
  }),
  heading: concept({
    primary: "heading",
  }),
  description: concept({
    primary: "description",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Heading() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Tenha uma Wallet <br />
          Específica para sua empresa
        </h1>
        <span className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          laborum temporibus officiis rem dolorem sint corporis tempore hic
          obcaecati commodi optio illo eligendi qui facilis aliquid alias,
          explicabo, perferendis nemo.
        </span>
      </div>
    </>
  );
}
