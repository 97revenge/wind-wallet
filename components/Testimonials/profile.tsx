import { wx, W } from "windstitch";

const concept = wx({
  variants: {
    primary: {
      element: `mt-4 flex items-center p-2  rounded-xl`,
      image: `h-11 w-11 flex-shrink-0 rounded-full object-cover`,
      user: `ml-4 h-auto px-2 border-b-2`,
      name: `mb-2 text-lg font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-rose-700  dark:text-white`,
      role: `mt-0.5 text-sm`,
    },
  },
});

type concept<T> = {
  element: T;
  image: T;
  user: T;
  name: T;
  role: T;
};

export const styles = {
  element: concept({
    primary: "element",
  }),
  image: concept({
    primary: "image",
  }),
  user: concept({
    primary: "user",
  }),
  name: concept({
    primary: "name",
  }),
  role: concept({
    primary: "role",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Profile({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image?: string;
}) {
  return (
    <>
      <div className={styles.element}>
        <img className={styles.image} src={image as string} alt="" />
        <div className={styles.user}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </>
  );
}
