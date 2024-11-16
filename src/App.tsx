import { Layout } from "./Components/Layout/Layout";
import "./styles/fonts.scss";
import "./styles/_variables.scss";
import "./styles/common.scss";
import { useState } from "react";
import { SelectedPageContext } from "./context/SelectedPageContext";

export function App() {
  const [selectedPage, setSelectedPage] = useState<string>("");

  const updataSelectedTab = (tab: string) => {
    setSelectedPage(tab);
  };

  return (
    <SelectedPageContext.Provider
      value={{ selectedPage, setSelectedPage: updataSelectedTab }}
    >
      <Layout />;
    </SelectedPageContext.Provider>
  );
}
