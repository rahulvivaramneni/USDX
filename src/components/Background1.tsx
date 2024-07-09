import { FunctionComponent } from "react";
import styles from "./Background1.module.css";

export type Background1Type = {
  className?: string;
};

const Background1: FunctionComponent<Background1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.partnerContainerWrapper}>
          <div className={styles.partnerContainer}>
            <div className={styles.partnerLogoRowWrapper}>
              <div className={styles.partnerLogoRow}>
                <div className={styles.strategicPartners}>
                  Strategic Partners
                </div>
                <div className={styles.partnerLogoContainer}>
                  <div className={styles.partnerLogoWrapperOne}>
                    <div className={styles.partnerLogoWrapperTwo}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-5@2x.png"
                      />
                    </div>
                    <div className={styles.secondPartnerLogo}>
                      <img className={styles.svgIcon1} alt="" src="/svg5.svg" />
                    </div>
                    <img className={styles.svgIcon2} alt="" src="/svg6.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container1}>
              <div className={styles.xusdEmpowersAContainer}>
                <span className={styles.xusdEmpowersAContainer1}>
                  <p className={styles.xusdEmpowersA}>
                    0xUSD empowers a network of businesses and builders around
                  </p>
                  <p className={styles.xusdEmpowersA}>
                    the world to move money in ways never thought possible by
                  </p>
                  <p className={styles.xusdEmpowersA}>
                    tackling the liquidity fragmentation market issue.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.coresvgFillIcon}
          loading="lazy"
          alt=""
          src="/coresvg-fill.svg"
        />
        <div className={styles.container2}>
          <div className={styles.interoperableColumn}>
            <div className={styles.background1}>
              <div className={styles.interoperableContent}>
                <div className={styles.interoperable}>Interoperable</div>
              </div>
              <div className={styles.axelarsProgrammableWeb3Container}>
                <p className={styles.xusdEmpowersA}>
                  Axelar's programmable Web3 interoperability
                </p>
                <p className={styles.xusdEmpowersA}>
                  architecture goes cross-chain with full fungibility
                </p>
                <p className={styles.xusdEmpowersA}>
                  and functionality scaling the next generation of
                </p>
                <p className={styles.xusdEmpowersA}>
                  internet applications to billions of users.
                </p>
              </div>
            </div>
            <div className={styles.background2}>
              <div className={styles.scalable}>Scalable</div>
              <div className={styles.newBlockchainConnectionsContainer}>
                <span>
                  <p className={styles.xusdEmpowersA}>
                    New blockchain connections span the network
                  </p>
                  <p className={styles.xusdEmpowersA}>
                    instantly via hub-and-spoke architecture, with
                  </p>
                  <p className={styles.xusdEmpowersA}>
                    zero new code. Now, anyone in the world can
                  </p>
                  <p className={styles.xusdEmpowersA}>
                    connect, interact and build across 50+
                  </p>
                  <p className={styles.xusdEmpowersA}>blockchains.</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.compliantColumn}>
            <div className={styles.background3}>
              <div className={styles.compliantContent}>
                <div className={styles.compliant}>Compliant</div>
              </div>
              <div className={styles.xusdIsAContainer}>
                <p className={styles.xusdEmpowersA}>
                  0xUSD is a regulated stablecoin fully backed by
                </p>
                <p className={styles.xusdEmpowersA}>
                  cash, cash equivalents, and U.S. Treasuries held in
                </p>
                <p className={styles.xusdEmpowersA}>
                  U.S. financial institutions. Tokens are intended to
                </p>
                <p className={styles.xusdEmpowersA}>
                  be redeemable 1:1 for U.S. dollars.
                </p>
              </div>
            </div>
            <div className={styles.background4}>
              <div className={styles.secure}>Secure</div>
              <div className={styles.theLargestMostContainer}>
                <p className={styles.xusdEmpowersA}>
                  The largest, most decentralized validator set in
                </p>
                <p className={styles.xusdEmpowersA}>
                  cross-chain. Multi-layer security measures,
                </p>
                <p className={styles.xusdEmpowersA}>
                  designed by the world’s leading cryptography
                </p>
                <p className={styles.xusdEmpowersA}>
                  and consensus experts where all key smart
                </p>
                <p className={styles.xusdEmpowersA}>
                  contracts are audited and certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background1;
