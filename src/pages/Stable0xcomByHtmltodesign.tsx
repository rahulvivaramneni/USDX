import { FunctionComponent } from "react";
import Background2 from "../components/Background2";
import Container1 from "../components/Container1";
import Background1 from "../components/Background1";
import Container from "../components/Container";
import Background from "../components/Background";
import styles from "./Stable0xcomByHtmltodesign.module.css";

const Stable0xcomByHtmltodesign: any = () => {
  return (
    <div className={styles.stable0xcomByHtmltodesign}>
      <main className={styles.container}>
        <Background2 />
        <Container1 />
        <Background1 />
        <section className={styles.containerParent}>
          <Container />
          <Background />
        </section>
      </main>
    </div>
  );
};

export default Stable0xcomByHtmltodesign;
