import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

export default function RogueComponent() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div data-theme={theme} className="rogueComponent">
        <h2>Rogue Component</h2>
        <p>
          This component is wrapped in its own ThemeContext.Provider. So it will
          start with the default context value ("light") as the theme, but when
          you click the following button, it will change its theme without
          affecting the rest of the app. Likewise, it won't be affected by
          changes in the app's theme.
        </p>

        <button onClick={() => setTheme("blue")}>I choose my own theme!</button>
        <button onClick={() => setTheme("light")}>Back to the default</button>
      </div>
    </ThemeContext.Provider>
  );
}
