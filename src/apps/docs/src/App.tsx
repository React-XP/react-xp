import { cn } from '@react-xp/core/tailwind';
import { useDidMount } from '@react-xp/core/useDidMount';
import { ThemeProvider } from '@react-xp/theme/themeProvider';
import { Box } from '@react-xp/ui/box';
import { Button } from '@react-xp/ui/button';
import { Typography } from '@react-xp/ui/typography';
import './assets/main.css';

const App = () => {
  useDidMount(() => {
    console.log('works');
  });

  console.log('test', { cn: cn('text-primary') });
  console.log('test another');

  return (
    <ThemeProvider theme="light">
      <div className="content">
        <Typography.H1>🚀 React XP - Docs</Typography.H1>
        <Typography.H2>h1</Typography.H2>
        <Typography.H3>h3</Typography.H3>
        <Typography.H4>h4</Typography.H4>
        <Typography>Test</Typography>
        <Box />
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
