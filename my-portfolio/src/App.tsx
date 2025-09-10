import MainLayout from "./components/MainLayout";
import { NavProvider } from "./hooks/useNav";
import { MyThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <MyThemeProvider>
      <NavProvider>
        <MainLayout/>
      </NavProvider>
    </MyThemeProvider>
  );
}

export default App;
