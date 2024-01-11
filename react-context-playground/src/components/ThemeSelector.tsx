import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <section>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("purple")}>Purple</button>
        <button onClick={() => setTheme("theme 3")}>Theme 3</button>
        <button onClick={() => setTheme("theme 4")}>Theme 4</button>
        <button onClick={() => setTheme("theme 5")}>Theme 5</button>
        <div data-theme={theme} className="testBox">
          Test
        </div>
      </section>
    </ThemeContext.Provider>
  );
}
