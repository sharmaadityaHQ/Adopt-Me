import { createContext } from "react";

// creates a context object with 2 components in it, a Provider and a Consumer
const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {}
]);

export default ThemeContext;
