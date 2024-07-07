// components/WaveBanner.js
import styles from './WaveBanner.module.css';

const WaveBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Hero Header</h2>
        <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non</p>
      </div>
      <div className={styles.waves}></div>
    </section>
  );
}

export default WaveBanner;
