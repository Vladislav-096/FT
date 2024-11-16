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
          <nav
            className={`${styles.nav} ${
              isDropdownOpen ? styles["show-dpopdow"] : ""
            }`}
          >
            <div className={styles["nav-item"]}>Преимущества Теle2</div>
            <div className={styles["nav-item"]}>Тарифы</div>
            <div className={styles["nav-item"]}>Акции и спецпредложения</div>
            <div className={styles["nav-item"]}>Промотариф Tele2</div>
            <div className={styles["nav-item"]}>Технология eSIM</div>
            <div className={styles["nav-item"]}>
              Подключение нового абонента
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
