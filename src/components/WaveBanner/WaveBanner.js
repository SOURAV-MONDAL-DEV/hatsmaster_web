// components/WaveBanner.js
import styles from "./WaveBanner.module.css";

import bannerImg from "@/images/Banner/banner.jpg";

const WaveBanner = () => {
  return (
    <section className={`${styles.hero} text-blue-500`}>
      <div className={styles.content}>
        <div style={{ backgroundImage: `url(${bannerImg.src})` }}>
          <h2>Hero Header</h2>
          <p>
            Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor
            fringilla sed, vestibulum id, eleifend justo vel bibendum sapien
            massa ac turpis faucibus orci luctus non
          </p>
        </div>
      </div>
      <div className={styles.waves}></div>
    </section>
  );
};

export default WaveBanner;
