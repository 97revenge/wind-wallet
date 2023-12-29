import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      container: `bg-gradient-to-b from-red-100 to-orange-200  dark:text-white items-center`,
      element: `p-8 flex flex-col  items-center  justify-center`,
      grid: `p-12 gap-4 grid xl:grid-cols-3 xl:grid-row-2 lg:grid-cols-3 bg-gray-200/10 rounded-3xl shadow-xl  justify-center items-center mx-auto`,
    },
  },
});

type concept<T> = {
  container: T;
  element: T;
  grid: T;
};

export const styles = {
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
