import { ThemeProvider } from '@react-xp/theme/theme-provider';
import './assets/main.css';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <h1>This is a boilerplate for create new apps</h1>
    </ThemeProvider>
  );
};
