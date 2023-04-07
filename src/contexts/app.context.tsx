import {createContext} from "react";

export const AppContext = createContext({
  appContext: '',
  setAppContext: (s: string) => {},
});
