import { ThemeProvider } from '@react-xp/theme/theme-provider';
import { RouterProvider } from '@tanstack/react-router';
import './assets/main.css';
import { router } from './pages';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
