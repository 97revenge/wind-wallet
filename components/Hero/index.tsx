import Description from "./description";
import Header from "./header";

import { styles } from "./style";

export const Index = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.element}>
            <Header />
            <Description />
          </div>
        </div>
      </div>
    </>
  );
};
