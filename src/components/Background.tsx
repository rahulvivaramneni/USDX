import { FunctionComponent } from "react";
import styles from "./Background.module.css";

export type BackgroundType = {
  className?: string;
};

const Background: FunctionComponent<BackgroundType> = ({ className = "" }) => {
  return (
    <footer className={[styles.background, className].join(" ")}>
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
                    <a className={styles.api}>API</a>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.container5}>
                    <div className={styles.company}>company</div>
                  </div>
                  <div className={styles.link}>
                    <div className={styles.aboutUs}>About us</div>
                  </div>
                  <div className={styles.container10}>
                    <div className={styles.legal}>Legal</div>
                  </div>
                </div>
                <div className={styles.container11}>
                  <div className={styles.container12}>
                    <div className={styles.resources}>resources</div>
                  </div>
                  <div className={styles.container13}>
                    <div className={styles.docs}>Docs</div>
                  </div>
                  <div className={styles.container13}>
                    <div className={styles.security}>Security</div>
                  </div>
                  <div className={styles.container15}>
                    <a className={styles.faq}>FAQ</a>
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
                        src="/svg-8@2x.png"
                      />
                    </div>
                    <div className={styles.link1}>
                      <img
                        className={styles.svgIcon}
                        alt=""
                        src="/svg-9@2x.png"
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
    </footer>
  );
};

export default Background;
