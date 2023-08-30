import savdoLogo from "../../_assets/svg/savdoLogo.svg";
import mainLogo from "../../_assets/svg/mainLogo.svg";
import worldLogo from "../../_assets/svg/worldLogo.svg";
import devhub from "../../_assets/svg/devhub.svg";
import styles from "./index.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Новости</a>
          </li>
          <li>
            <a href="/">Тренинги</a>
          </li>
          <li>
            <a href="/">Мероприятия</a>
          </li>
          <li>
            <a href="/">Опросы</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Кабинет</a>
          </li>
        </ul>
        <div className={styles.contacts}>
          <div className={styles.mainContacts}>
            <div className={styles.phone}>
              <i className="fa-solid fa-phone" />
              <h4>+998 (94) 638 33 33</h4>
            </div>
            <div className={styles.time}>
              <i className="fa-regular fa-clock" />
              <h4>Пн-Сб. 9:00—18:00, Вс: выходной </h4>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <a href="/">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="/">
              <i className="fa-brands fa-telegram" />
            </a>
            <a href="/">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
        </div>
        <div className={styles.partners}>
          <img src={savdoLogo} alt="savdoLogo" />
          <img src={mainLogo} alt="mainLogo" />
          <img src={worldLogo} alt="worldLogo" />
        </div>
        <div className={styles.rights}>
          <h4>© 2023 “Hududiy Biznes Inkubator” Все права защищены.</h4>
          <div>
            Разработка сайта — <img src={devhub} alt="devhub" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
