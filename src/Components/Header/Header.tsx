import styles from "./header.module.scss";
import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-upper"]}>
        <div className="container">
          <div className={styles["header-upper-content"]}>
            <picture className={styles["logo-picture"]}>
              <a className={styles["logo-link"]} href="">
                <img className={styles["logo-img"]} src={logo} alt="Logo" />
              </a>
            </picture>
            <p className={styles.location}>Москва и область</p>
            <picture className={styles["bell-picture"]}>
              <img className={styles["bell-img"]} src={bell} alt="Bell icon" />
            </picture>
            <div className={styles["burger-menu"]}>
              <div className={styles["burger-bar"]}></div>
              <div className={styles["burger-bar"]}></div>
              <div className={styles["burger-bar"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["header-lower"]}>
        <div className="container">
          <div className={styles["header-lower-content"]}>
            <nav className={styles.nav}>
              <ul className={`list-reset ${styles["nav-lsit"]}`}>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Преимущества Tele2
                  </a>
                </li>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Тарифы
                  </a>
                </li>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Акции и спецпредложения
                  </a>
                </li>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Промотариф Tele2
                  </a>
                </li>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Технология eSIM
                  </a>
                </li>
                <li className={styles["nav-list-item"]}>
                  <a className={styles["nav-link"]} href="#">
                    Подключение нового абонента
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
