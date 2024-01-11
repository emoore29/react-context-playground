import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <section>
        <button onClick={() => setTheme("theme 1")}>Theme 1</button>
        <button onClick={() => setTheme("theme 2")}>Theme 2</button>
        <button onClick={() => setTheme("theme 3")}>Theme 3</button>
        <button onClick={() => setTheme("theme 4")}>Theme 4</button>
        <button onClick={() => setTheme("theme 5")}>Theme 5</button>
      </section>
    </ThemeContext.Provider>
  );
}
