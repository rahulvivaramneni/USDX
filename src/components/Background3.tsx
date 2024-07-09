import { FunctionComponent } from "react";
import styles from "./Background3.module.css";

export type Background3Type = {
  className?: string;
};

const Background3: FunctionComponent<Background3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img className={styles.linkSvg} alt="" src="/link--svg.svg" />
            <div className={styles.nav}>
              <div className={styles.link}>
                <div className={styles.aboutUs}>About us</div>
              </div>
              <div className={styles.link1}>
                <div className={styles.aboutUs}>Team</div>
              </div>
              <div className={styles.link}>
                <div className={styles.aboutUs}>Partners</div>
              </div>
            </div>
            <div className={styles.link3}>
              <div className={styles.button}>
                <img className={styles.svgIcon} alt="" src="/svg2@2x.png" />
              </div>
              <div className={styles.button1}>
                <div className={styles.aboutUs}>Join waitlist</div>
              </div>
            </div>
          </div>
          <div className={styles.herobaner}>
            <div className={styles.heading1Container}>
              <p className={styles.introducingUsdx}>Introducing USDX,</p>
              <p className={styles.introducingUsdx}>
                The Alog-Collateral Stablecoin
              </p>
            </div>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <div className={styles.firstDecentralizedContainer}>
                  <p
                    className={styles.introducingUsdx}
                  >{`First decentralized & fractionally algorithmic stable coin `}</p>
                  <p
                    className={styles.introducingUsdx}
                  >{`built on Arweave & AO.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.heading2}>Horizontal Scaling</div>
        <div className={styles.margin2}>
          <div className={styles.container3}>
            <div className={styles.firstDecentralizedContainer}>
              <p
                className={styles.introducingUsdx}
              >{`The protocol issues a stable token USDX pegged to USD and a governance token ARX. `}</p>
              <p className={styles.introducingUsdx}>
                The protocol maintains the collateral ratio, representing the
                ratio of collateral to algorithmic token that backs the stable
                coin USDX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background3;
