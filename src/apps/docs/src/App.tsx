import { ThemeProvider } from '@react-xp/theme/themeProvider';
import { RouterProvider } from '@tanstack/react-router';
import './assets/main.css';
import { router } from './pages';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
