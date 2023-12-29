import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      paragraph: `mb-6 flex items-center`,
      svg: `mr-3 h-6 w-6 text-green-500 font-extrabold dark:text-neutral-100`,
      span: `font-semibold text-lg hover:underline text-gray-600`,
    },
  },
});

type concept<T> = {
  paragraph: T;
  svg: T;
  span: T;
};

const styles = {
  paragraph: concept({
    primary: "paragraph",
  }),
  svg: concept({
    primary: "svg",
  }),
  span: concept({
    primary: "span",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Card({ role }: { role: string }) {
  return (
    <>
      <p className={styles.paragraph}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className={styles.svg}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <span className={styles.span}>{role}</span>
      </p>
    </>
  );
}
