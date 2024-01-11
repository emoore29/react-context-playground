type ThemeSelectorProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function ThemeSelector({ setTheme }: ThemeSelectorProps) {
  return (
    <section>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("purple")}>Purple</button>
      <button onClick={() => setTheme("green")}>Green</button>
    </section>
  );
}
