import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
        <div className={styles.heading3}>
          <div className={styles.joinStable0xEcosystem}>
            Join Stable0x Ecosystem
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.tapIntoOurContainer}>
            <p className={styles.tapIntoOur}>
              Tap into our liquidity contribution program tailored
            </p>
            <p className={styles.tapIntoOur}>
              for blockchain networks and DeFi protocols
            </p>
            <p className={styles.tapIntoOur}>
              unlocking exclusive yield opportunities.
            </p>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <input
              className={styles.container2}
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <div className={styles.link}>
            <div className={styles.joinWaitlist}>Join waitlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
