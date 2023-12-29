import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      screen: `text-black dark:text-white body-font lg:pt-20`,
      container: `container px-5 pt-32 mx-auto lg:px-4 lg:py-4`,
      element: `flex flex-col w-full text-left md:text-center justify-center`,
      grid: `grid grid-rows-1 grid-cols-1 xl:grid-cols-3 md:grid-cols-3 xl:mx-[20%] p-2 pt-2 gap-x-12 `,
    },
  },
});

type concept<T> = {
  screen: T;
  container: T;
  element: T;
  grid: T;
};

export const styles = {
  screen: concept({
    primary: "screen",
  }),
  container: concept({
    primary: "container",
  }),
  element: concept({
    primary: "element",
  }),
  grid: concept({
    primary: "grid",
  }),
} satisfies concept<W.Infer<typeof concept>>;
