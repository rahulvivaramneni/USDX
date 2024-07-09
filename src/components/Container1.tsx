import { FunctionComponent } from "react";
import styles from "./Container1.module.css";

export type Container1Type = {
  className?: string;
};

const Container1: FunctionComponent<Container1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.heading2NewStablecoinParWrapper}>
        <div className={styles.heading2}>New Stablecoin Paradigm</div>
      </div>
      <div className={styles.paradigmContent}>
        <div className={styles.container1}>
          <div className={styles.background}>
            <img className={styles.svgIcon} alt="" src="/svg1.svg" />
            <div className={styles.container2}>
              <div className={styles.heading5}>
                <div className={styles.whatWeDo}>What We Do?</div>
              </div>
              <div className={styles.container3}>
                <div className={styles.stable0xIsEstablishingContainer}>
                  <p className={styles.stable0xIsEstablishing}>
                    Stable0x is establishing the most extensive stablecoin
                    network.It
                  </p>
                  <p className={styles.stable0xIsEstablishing}>
                    caters to billions of individuals, millions of businesses,
                    and
                  </p>
                  <p className={styles.stable0xIsEstablishing}>
                    developers globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.background1}>
            <img className={styles.svgIcon1} alt="" src="/svg-2@2x.png" />
            <div className={styles.container2}>
              <div className={styles.heading5}>
                <div className={styles.whatWeDo}>Fully Programmable</div>
              </div>
              <div className={styles.container5}>
                <div className={styles.stable0xIsEstablishingContainer}>
                  <p className={styles.stable0xIsEstablishing}>
                    Take advantage of 0xUSD's full programmability to explore
                  </p>
                  <p className={styles.stable0xIsEstablishing}>
                    opportunities in crypto capital markets, including trading,
                  </p>
                  <p className={styles.stable0xIsEstablishing}>
                    borrowing, lending, and fundraising, accessible on a global
                    scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundParent}>
          <div className={styles.background2}>
            <img className={styles.svgIcon2} alt="" src="/svg-3@2x.png" />
            <div className={styles.container2}>
              <div className={styles.heading5}>
                <div className={styles.highYieldAccess}>High-Yield Access</div>
              </div>
              <div className={styles.container7}>
                <div className={styles.xusdADigitalContainer}>
                  <p className={styles.stable0xIsEstablishing}>
                    0xUSD, a digital dollar with enhanced capabilities, enables
                    businesses and innovators worldwide to get
                  </p>
                  <p className={styles.stable0xIsEstablishing}>
                    access to cross-chain yield opportunities in more than 60
                    blockchain ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.backgroundGroup}>
            <div className={styles.background3}>
              <img className={styles.svgIcon2} alt="" src="/svg-4@2x.png" />
              <div className={styles.container2}>
                <div className={styles.heading5}>
                  <div className={styles.highYieldAccess}>Near Zero-cost</div>
                </div>
                <div className={styles.container9}>
                  <div className={styles.stable0xIsEstablishingContainer}>
                    <p className={styles.stable0xIsEstablishing}>
                      Eliminate concerns about gas fees
                    </p>
                    <p className={styles.stable0xIsEstablishing}>
                      by paying transfer fees in 0xUSD,
                    </p>
                    <p className={styles.stable0xIsEstablishing}>
                      the same currency used for gas. No
                    </p>
                    <p className={styles.stable0xIsEstablishing}>
                      need to hold Ethereum or other
                    </p>
                    <p className={styles.stable0xIsEstablishing}>
                      volatile digital assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.background4}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container1;
