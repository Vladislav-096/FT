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
              <img className={styles["logo-img"]} src={logo} alt="Logo" />
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
                <li className={styles["nav-list-item"]}>Преимущества Tele2</li>
                <li className={styles["nav-list-item"]}>Тарифы</li>
                <li className={styles["nav-list-item"]}>
                  Акции и спецпредложения
                </li>
                <li className={styles["nav-list-item"]}>Промотариф Tele2</li>
                <li className={styles["nav-list-item"]}>Технология eSIM</li>
                <li className={styles["nav-list-item"]}>
                  Подключение нового абонента
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
