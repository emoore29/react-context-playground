import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function ChildComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="childComponent">
      <h2>Child Component</h2>
      <p>
        This is a sibling of Rogue Component. It gets its theme from
        useContext(ThemeContext), and gets its theme from the main app's
        context.
      </p>
    </div>
  );
}
