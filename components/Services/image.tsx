import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      element: `block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12`,
      image: `w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg`,
    },
  },
});

type concept<T> = {
  element: T;
  image: T;
};

const styles = {
  element: concept({
    primary: "element",
  }),
  image: concept({
    primary: "image",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Image() {
  return (
    <>
      <div className={styles.element}>
        <img
          src="https://lh3.googleusercontent.com/rhtZ1kfHrEdkD2dVUIcbX1Hby0W1JsZIFeVYaiBb1iAuGG3wXmC_26DhVkF2-i3gzEWnbf9pxq0D6O_OvqCuRschJS_aoLmizphV3IZ_ZsAecLTW8Mw"
          alt="Google Wallet Icon"
          className={styles.image}
        />
      </div>
    </>
  );
}
