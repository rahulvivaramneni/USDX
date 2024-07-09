import { FunctionComponent } from "react";
import styles from "./BackgroundEnd.module.css";

export type BackgroundEndType = {
  className?: string;
};

const BackgroundEnd: FunctionComponent<BackgroundEndType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.margin}>
              <div className={styles.container3}>
                <div className={styles.container4}>
                  <div className={styles.container5}>
                    <div className={styles.products}>products</div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.xusd}>0xUSD</div>
                  </div>
                  <div className={styles.container7}>
                    <div className={styles.xusd}>API</div>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.container5}>
                    <div className={styles.products}>company</div>
                  </div>
                  <div className={styles.link}>
                    <div className={styles.xusd}>About us</div>
                  </div>
                  <div className={styles.container10}>
                    <div className={styles.xusd}>Legal</div>
                  </div>
                </div>
                <div className={styles.container11}>
                  <div className={styles.container12}>
                    <div className={styles.products}>resources</div>
                  </div>
                  <div className={styles.container13}>
                    <div className={styles.xusd}>Docs</div>
                  </div>
                  <div className={styles.container13}>
                    <div className={styles.xusd}>Security</div>
                  </div>
                  <div className={styles.container15}>
                    <div className={styles.xusd}>FAQ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container16}>
              <div className={styles.container17}>
                <div className={styles.margin1}>
                  <div className={styles.container18}>
                    <div className={styles.link1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg7@2x.png"
                      />
                    </div>
                    <div className={styles.link1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg8@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.container19}>
                  <div className={styles.copyright2024All}>
                    © Copyright 2024. All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.svgIcon2} alt="" src="/svg9.svg" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundEnd;
