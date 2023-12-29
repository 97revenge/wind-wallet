import Card from "./card";
import Gallery from "./gallery";

import { styles } from "./style";

export const Index = () => {
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.element}>
            <Gallery />
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};
