import { wx } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      screen: `py-6 text-gray-900 sm:py-16 lg:py-20`,
      container: `mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8`,
      element: `flex flex-col lg:flex-row`,
      grid: `relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20`,
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
};
