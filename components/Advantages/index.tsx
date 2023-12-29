import Heading from "./heading";
import Wallet from "./wallet";
import Button from "./button";

import { styles } from "./style";

export const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.element}>
          <Heading />
          <div className={styles.grid}>
            <Wallet />
            <Wallet />
            <Wallet />
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};
