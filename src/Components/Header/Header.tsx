import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface linkItem {
  path: string;
  descr: string;
}

type linkItems = linkItem[];

const links: linkItems = [
  { path: "/benefits", descr: "Преимущества Теle2" },
  { path: "/tariffs", descr: "Тарифы" },
  { path: "/promotions", descr: "Акции и спецпредложения" },
  { path: "/promotariff", descr: "Промотариф Tele2" },
  { path: "/esim", descr: "Технология eSIM" },
  { path: "/subscription", descr: "Подключение нового абонента" },
];

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const location = useLocation();

  const handleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-upper"]}>
        <div className="container">
          <div className={styles["header-upper-content"]}>
            <picture className={styles["logo-picture"]}>
              <Link
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
                className={styles["logo-link"]}
                to={"/"}
              >
                <img className={styles["logo-img"]} src={logo} alt="Logo" />
              </Link>
            </picture>
            <p className={styles.location}>Москва и область</p>
            <div className={styles["notification-box"]}>
              <span className={styles["notification-count"]}></span>
              <div className={styles["notification-bell"]}>
                <span className={styles["bell-top"]}></span>
                <span className={styles["bell-middle"]}></span>
                <span className={styles["bell-bottom"]}></span>
                <span className={styles["bell-rad"]}></span>
              </div>
            </div>
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
              isDropdownOpen ? styles["show-dropdown"] : ""
            }`}
          >
            {links.map((item, index) => (
              <Link
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
                key={index}
                to={item.path}
                className={`${styles["nav-item"]} ${
                  location.pathname === item.path
                    ? styles["nav-item-chosen"]
                    : ""
                }`}
              >
                {item.descr}
              </Link>
            ))}
          </nav>
        </div>
        {isDropdownOpen && (
          <div className={styles["location-wrapper"]}>
            <p className={styles.location}>Москва и область</p>
          </div>
        )}
      </div>
    </header>
  );
};
