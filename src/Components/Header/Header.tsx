import styles from "./header.module.scss";
import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <picture>
          <img src={logo} alt="Logo" />
        </picture>
        <p className={styles.location}>Москва и область</p>
        <picture>
          <img src={bell} alt="Bell icon" />
        </picture>
        <div className={styles["burger-menu"]}>
          <div className={styles["burger-bar"]}></div>
          <div className={styles["burger-bar"]}></div>
          <div className={styles["burger-bar"]}></div>
        </div>
        <nav>
          <ul>
            <li>Преимущества Tele2</li>
            <li>Тарифы</li>
            <li>Акции и спецпредложения</li>
            <li>Промотариф Tele2</li>
            <li>Технология eSIM</li>
            <li>Подключение нового абонента</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
