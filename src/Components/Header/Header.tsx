import styles from "./header.module.scss";
import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-upper"]}>
        <div className="container">
          <div className={styles["header-upper-content"]}>
            <picture className={styles["logo-picture"]}>
              <Link className={styles["logo-link"]} to={"/"}>
                <img className={styles["logo-img"]} src={logo} alt="Logo" />
              </Link>
            </picture>
            <p className={styles.location}>Москва и область</p>
            <picture className={styles["bell-picture"]}>
              <img className={styles["bell-img"]} src={bell} alt="Bell icon" />
            </picture>
            <div onClick={handleDropdown} className={styles["burger-menu"]}>
              <div
                className={`${styles["burger-bar"]} ${
                  isDropdownOpen ? styles["burger-cross"] : ""
                }`}
              ></div>
              <div
                className={`${styles["burger-bar"]} ${
                  isDropdownOpen ? styles["burger-cross"] : ""
                }`}
              ></div>
              <div
                className={`${styles["burger-bar"]} ${
                  isDropdownOpen ? styles["burger-cross"] : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["header-lower"]}>
        <div className="container">
          <div
            className={`${styles["header-lower-content"]}
             ${isDropdownOpen ? styles["show-dropdown"] : ""}
             `}
          >
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
            <div className={styles["location-wrapper"]}>
              <p className={styles.location}>Москва и область</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
