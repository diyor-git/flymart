import { useRef } from "react";
import { Slider } from "./components";
import arrow from "../../_assets/svg/arrow.svg";
import styles from "./index.module.scss";

function Trainings() {
  const box = useRef<HTMLDivElement>(null);
  const prevSlide = () => {
    if (box.current) {
      const width = box.current.clientWidth;
      box.current.scrollLeft -= width;
    }
  };

  const nextSlide = () => {
    if (box.current) {
      const width = box.current.clientWidth;
      box.current.scrollLeft += width;
    }
  };
  return (
    <section className={styles.trainings}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Тренинги</h2>
            <h4>Все тренинги</h4>
          </div>
          <div className={styles.arrows}>
            <button onClick={prevSlide} type="button">
              <img src={arrow} alt="arrow" />
            </button>
            <button onClick={nextSlide} type="button">
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <Slider boxRef={box} />
    </section>
  );
}

export default Trainings;
