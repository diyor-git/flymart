import React from "react";
import Item from "../ Item";
import uzumImg from "../../../../_assets/img/uzum.png";
import product from "../../../../_assets/img/product.png";
import user1 from "../../../../_assets/svg/user1.svg";
import user2 from "../../../../_assets/svg/user2.svg";
import { ItemType } from "../types.ts";
import styles from "./index.module.scss";

const data: ItemType[] = [
  {
    banner: product,
    title: "Бизнес тренинг от Давр Банк",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках программы “Женщины в бизнесе” в Центральной Азии.",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: uzumImg,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 2,
    mentorsImg: [user1, user2],
    desc: "Бизнес-тренинг для-предпринимателей в рамках...",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: uzumImg,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках...",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: product,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках...",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: uzumImg,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках программы “Женщины в бизнесе” в Центральной Азии.",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: uzumImg,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках...",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
  {
    banner: uzumImg,
    title: "Uzum проводит бизнес тренинг для своих предпринимателей",
    mentorsNum: 3,
    mentorsImg: [user1, user2, user1],
    desc: "Бизнес-тренинг для-предпринимателей в рамках программы “Женщины в бизнесе” в Центральной Азии.",
    place: "Ташкент, Гостиница Intercontinental",
    from: "05.06.2023",
    to: "15.06.2023",
  },
];

interface SliderProps {
  boxRef: React.RefObject<HTMLDivElement>;
}

function Slider({ boxRef }: SliderProps) {
  return (
    <div className={styles.productCarousel}>
      <div ref={boxRef} className={styles.productContainer}>
        {data.map((item) => (
          <Item
            banner={item.banner}
            title={item.title}
            mentorsNum={item.mentorsNum}
            mentorsImg={item.mentorsImg}
            desc={item.desc}
            place={item.place}
            from={item.from}
            to={item.to}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
