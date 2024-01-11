import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={theme}>
      <h1>React Context Demonstration</h1>
      <p>This is a simple app for understanding the usage of React Context.</p>
      <p>
        React Context is a global state management system: a way to share data
        between components in an app without drilling through component props.
      </p>
      <p>I have used React Context to create various themes:</p>
      <p>{theme}</p>
      <ThemeSelector />
    </ThemeContext.Provider>
  );
}

export default App;
