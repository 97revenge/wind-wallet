import Description from "./description";
import Device from "./device";
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
            <div className={styles.grid}>
              <Device />
              <Device />
              <Device />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
