import { FunctionComponent } from "react";
import styles from "./Background2.module.css";

export type Background2Type = {
  className?: string;
};

const Background2: FunctionComponent<Background2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* <img
            className={styles.linkSvg}
            loading="lazy"
            alt=""
            src="/link--svg.svg"
          /> */}
          <div className={styles.logo}>USDX</div>
          <nav className={styles.nav}>
            <div className={styles.link}>
              <a className={styles.aboutUs}>About us</a>
            </div>
            <div className={styles.link1}>
              <a className={styles.tldr}>Team</a>
            </div>
            <div className={styles.link}>
              <a className={styles.partners}>Docs</a>
            </div>
          </nav>
          <div className={styles.link3}>
            <div className={styles.button}>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg@2x.png"
              />
            </div>
            <button className={styles.button1}>
              <div className={styles.joinWaitlist}>Join waitlist</div>
            </button>
          </div>
        </header>
        <div className={styles.container1}>
          <h1 className={styles.heading1Container}>
            <span className={styles.heading1Container1}>
              <p className={styles.introducing0xusd}>Introducing USDX,</p>
              <p className={styles.introducing0xusd}>
                The Algo-Collateral Stablecoin
              </p>
            </span>
          </h1>
          <div className={styles.margin}>
            <div className={styles.container2}>
              <div className={styles.aNativelyCrossChainContainer}>
                <p className={styles.introducing0xusd}>
                  First decentralized & fractionally algorithmic stable coin
                </p>
                <p className={styles.introducing0xusd}>
                  built on Arweave & AO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.heading2}>Horizontal Scaling</div>
        <div className={styles.margin1}>
          <div className={styles.container4}>
            <div className={styles.theNativeCrossChainContainer}>
              <span>
                <p className={styles.introducing0xusd}>
                  The protocol issues a stable token USDX pegged to USD and a
                  governance token ARX, the protocol maintains the collateral
                  ratio,
                </p>
                <p className={styles.introducing0xusd}>
                  representing the ratio of collateral to algorithmic token that
                  backs the stable coin USDX.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background2;
