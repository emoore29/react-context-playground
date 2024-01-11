import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSelector from "./components/ThemeSelector";
import { useState } from "react";
import RogueComponent from "./components/RogueComponent";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div data-theme={theme} className="mainWrapper">
        <section className="contentWrapper">
          <h1>React Context Demonstration</h1>
          <p>
            This app uses themes to demonstrate React Context. Check the{" "}
            <a href="www.github.com">readme.md file on Github</a> for further
            explanation. I have used React Context to create various themes.
          </p>

          <p>Current theme: "{theme}"</p>
          <ThemeSelector setTheme={setTheme} />
          <RogueComponent />
          <ChildComponent />
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
