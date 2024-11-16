import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import styles from "./layout.module.scss";
import { Main } from "../Main/Main";

export const Layout = () => {
  return (
    <BrowserRouter>
      <div className={styles.page}>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};
