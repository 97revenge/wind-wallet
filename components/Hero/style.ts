import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      screen: `text-black dark:text-white body-font lg:pt-20`,
      container: `container px-5 pt-32 mx-auto lg:px-4 lg:py-4`,
      element: `flex flex-col w-full text-left md:text-center justify-center`,
    },
  },
});

type concept<T> = {
  screen: T;
  container: T;
  element: T;
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
} satisfies concept<W.Infer<typeof concept>>;
