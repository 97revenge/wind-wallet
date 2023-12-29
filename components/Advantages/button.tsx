import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      container: `flex w-full  items-center justify-center mt-3`,
      button: `block w-auto py-3 px-6 text-center rounded-xl transition bg-orange-600 hover:bg-orange-700 active:bg-orange-800 focus:bg-indigo-600`,
      text: `text-white font-semibold text-3xl`,
    },
  },
});

type concept<T> = {
  container: T;
  button: T;
  text: T;
};

const styles = {
  container: concept({
    primary: "container",
  }),
  button: concept({
    primary: "button",
  }),
  text: concept({
    primary: "text",
  }),
};

export default function Button() {
  return (
    <>
      <div className={styles.container}>
        <a type="submit" title="Submit" className={styles.button}>
          <span className={styles.text}>Saiba Mais</span>
        </a>
      </div>
    </>
  );
}
