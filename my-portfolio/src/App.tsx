import MainLayout from "./components/MainLayout";
import { MyThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <MyThemeProvider>
      <MainLayout/>
    </MyThemeProvider>
  );
}

export default App;
