import { createContext } from "react";

interface SelectedPageContext {
  selectedPage: string;
  setSelectedPage: (select: string) => void;
}

export const SelectedPageContext = createContext<SelectedPageContext>({
  selectedPage: "",
  setSelectedPage: () => {},
});
