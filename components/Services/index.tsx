import Image from "./image";
import Section from "./section";

import { styles } from "./stytle";

export const Index = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.elem}>
            <div className={styles.item}>
              <Image />
              <Section />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
