import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function ThemeSelector() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <section>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("purple")}>Purple</button>
      <button onClick={() => setTheme("green")}>Green</button>
    </section>
  );
}
