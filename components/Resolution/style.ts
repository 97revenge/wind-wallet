import { W, wx } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      screen: `relative bottom-12 max-w-[85rem] px-4  sm:px-6 lg:px-8 pb-12 mx-auto `,
      container: `container lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center`,
      element: `lg:col-span-7`,
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
