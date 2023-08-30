import arrow from "../../../../_assets/svg/arrowUpRight.svg";
import arrow2 from "../../../../_assets/svg/arrowUpRightBlack.svg";
import calendar from "../../../../_assets/svg/calendar.svg";
import { ItemType } from "../types.ts";
import styles from "./index.module.scss";

function Item({
  banner,
  title,
  mentorsNum,
  mentorsImg,
  desc,
  place,
  from,
  to,
}: ItemType) {
  return (
    <div className={styles.item}>
      <div className={styles.banner}>
        <img src={banner} alt="banner" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.header}>
          <div className={styles.mentors}>
            <div className={styles.mentorsImg}>
              {mentorsImg.map((mentorImg, ind) => (
                // eslint-disable-next-line react/no-array-index-key
                <img key={ind} src={mentorImg} alt="mentorImg" />
              ))}
            </div>
            <div>
              <h5>Менторы</h5>
              <h4>{mentorsNum} ментора</h4>
            </div>
          </div>
          <button type="button">
            Участвовать <img src={arrow} alt="arrow" />
          </button>
        </div>
        <p className={styles.desc}>{desc}</p>
        <h5 className={styles.place}>{place}</h5>
        <div className={styles.footer}>
          <div className={styles.calendar}>
            <img src={calendar} alt="calendar" />
            <h6>
              <span>c</span> {from}
            </h6>
            <h6>
              <span>по</span> {to}
            </h6>
          </div>
          <button type="button">
            Подробнее
            <img src={arrow2} alt="arrow2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
