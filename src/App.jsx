import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  ClientSection,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className=" bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexcenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
        <ClientSection /> <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
