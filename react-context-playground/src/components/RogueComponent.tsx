import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

export default function RogueComponent() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="rogueComponent">
        <h2>Rogue Component</h2>
        <p>
          This component starts with the default context value ("light") as the
          theme, and when its state is updated, the theme will update without
          updating the theme of the rest of the app. This is because it is
          wrapped in its own ThemeContext.Provider and has its own state.
        </p>

        <button onClick={() => setTheme("blue")}>I choose my own theme!</button>
        <button onClick={() => setTheme("light")}>Back to the default</button>
      </div>
    </ThemeContext.Provider>
  );
}
