import logo from "../../_assets/svg/logo.svg";
import arrow from "../../_assets/svg/arrowUpRight.svg";
import styles from "./index.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
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
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.lang}>
              <h3>UZ</h3>
              <h3 className={styles.active}>RU</h3>
              <h3>EN</h3>
            </div>
            <button type="button">
              Кабинет <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
