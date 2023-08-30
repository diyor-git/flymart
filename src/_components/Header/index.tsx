import img from "../../_assets/svg/headerImg.svg";
import wave from "../../_assets/svg/wave.svg";
import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>
              Создай <span>свой бизнес</span> вместе с нами
            </h1>
            <p>
              Станьте резидентом нашего бизнес инкубатора и получите больше
              возможностей
            </p>
            <div className={styles.btns}>
              <button type="button">Стать резидентом</button>
              <button type="button">Стать ментором</button>
            </div>
            <div className={styles.statistics}>
              <div className={styles.statistic}>
                <h3>18 500+</h3>
                <p>Резидентов</p>
              </div>
              <div className={styles.statistic}>
                <h3>18 500+</h3>
                <p>Резидентов</p>
              </div>
              <div className={styles.statistic}>
                <h3>18 500+</h3>
                <p>Резидентов</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={img} alt="headerImg" />
          </div>
        </div>
        <img className={styles.wave} src={wave} alt="wave" />
      </div>
    </header>
  );
}

export default Header;
