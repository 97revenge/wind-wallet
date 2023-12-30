import { W, wx } from "windstitch";
import Profile from "./profile";

const concept = wx({
  variants: {
    primary: {
      element: `flex flex-col bg-white border-4  p-4 rounded-xl border-b-orange-500 gap-y-2 dark:bg-gray-200 `,
      comment: `text-lg leading-relaxed  `,
    },
  },
});

type concept<T> = {
  element: T;
  comment: T;
};

export const styles = {
  comment: concept({
    primary: "comment",
  }),
  element: concept({
    primary: "element",
  }),
} satisfies concept<W.Infer<typeof concept>>;

export default function Comment({
  comment,
  user,
}: {
  comment: string;
  user: { name: string; role: string; image: string };
}) {
  return (
    <>
      <div className={styles.element}>
        <div>
          <blockquote>
            <p className={styles.comment}>{comment}</p>
          </blockquote>
        </div>

        <Profile name={user?.name} role={user?.role} image={user.image} />
      </div>
    </>
  );
}
