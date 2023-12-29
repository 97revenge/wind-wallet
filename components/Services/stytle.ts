import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      screen: `container my-24 mx-auto md:px-6`,
      container: `mb-32 shadow-xl`,
      elem: `block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`,
      item: `flex flex-wrap items-center`,
    },
  },
});

type concept<T> = {
  screen: T;
  container: T;
  elem: T;
  item: T;
};

export const styles = {
  screen: concept({
    primary: "screen",
  }),
  container: concept({
    primary: "container",
  }),
  elem: concept({
    primary: "elem",
  }),
  item: concept({
    primary: "item",
  }),
} satisfies concept<W.Infer<typeof concept>>;
