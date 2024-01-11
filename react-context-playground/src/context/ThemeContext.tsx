import { createContext } from "react";

interface DefaultContextValue {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<DefaultContextValue>({
  theme: "light",
  setTheme: () => {
    console.error("No context available.");
  },
});

// createContext returns a context object
// The object contains two properties:
// SomeContext.Provider - provide the context value to components. Components can be wrapped in a context provider to specify the value of context for all components inside:

// function App() {
//       const [theme, setTheme] = useState('light');
//       // ...
//       return (
//         <ThemeContext.Provider value={theme}>
//           <Page />
//         </ThemeContext.Provider>
//       );
//     }

// Components can read context by passing it to useContext():

// function Button() {
//       const theme = useContext(ThemeContext);
//       // ...
//     }

// The values they receive will be the default values specified when creating the contexts.
// To make context change over time, add state and wrap components in a context provider.

// function MyPage() {
//       const [theme, setTheme] = useState('dark');
//       return (
//         <ThemeContext.Provider value={theme}>
//           <Form />
//           <Button onClick={() => {
//             setTheme('light');
//           }}>
//             Switch to light theme
//           </Button>
//         </ThemeContext.Provider>
//       );
//     }

// Now any Button inside the provider will receive the current theme value.
// If setTheme() is called to update the theme value passed to the provider, all Button components will re-render with the new 'light' value.

// SomeContext.Consumer - rarely used to read the context value.
