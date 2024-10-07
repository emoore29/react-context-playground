import { useContext } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import RogueComponent from "./components/RogueComponent";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="mainWrapper">
      <section className="contentWrapper">
        <h1>React Context Demo</h1>
        <p>
          This app uses themes to demonstrate React Context. Check the{" "}
          <a href="https://github.com/emoore29/react-context-playground#react-context-playground">
            readme.md file on Github
          </a>{" "}
          for further explanation.
        </p>

        <p>Current theme: "{theme}"</p>
        <ThemeSelector />
        <RogueComponent />
        <ChildComponent />
      </section>
    </div>
  );
}

export default App;
