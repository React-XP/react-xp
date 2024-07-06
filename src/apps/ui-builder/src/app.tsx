import { ConsoleProvider } from '@react-xp/core/console';
import { ThemeProvider } from '@react-xp/theme/theme-provider';
import { Box } from '@react-xp/ui/box';
import './assets/main.css';
import { Footer, Header, UiBuilder } from './components';

export const App = () => {
  return (
    <ConsoleProvider debug log warn>
      <ThemeProvider defaultTheme="light">
        <Box orientation="vertical" className="h-screen">
          <Header />
          <UiBuilder />
          <Footer />
        </Box>
      </ThemeProvider>
    </ConsoleProvider>
  );
};
