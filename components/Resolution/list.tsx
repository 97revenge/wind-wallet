import { wx } from "windstitch";
import Icon from "./icon";

const concept = wx({
  variants: {
    primary: {
      list: `space-y-2 sm:space-y-4`,
      item: `flex space-x-3`,
      span: `text-sm sm:text-base text-gray-500`,
    },
  },
});

type concept<T> = {
  list: T;
  item: T;
  span: T;
};

const styles = {
  list: concept({
    primary: "list",
  }),
  item: concept({
    primary: "item",
  }),
  span: concept({
    primary: "span",
  }),
};

export default function List() {
  return (
    <>
      <ul role="list" className={styles.list}>
        <li className={styles.item}>
          <Icon />
          <span className={styles.span}>
            <b>Menos contas</b> - mais tempo
          </span>
        </li>

        <li className={styles.item}>
          <Icon />
          <span className={styles.span}>
            Escalabilidade de sistema da Google
          </span>
        </li>

        <li className={styles.item}>
          <Icon />
          <span className={styles.span}>
            Extremamente eficiente para <b>Dispositivos Android</b>
          </span>
        </li>
      </ul>
    </>
  );
}
