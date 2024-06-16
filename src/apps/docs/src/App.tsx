import { cn } from '@react-xp/core/tailwindHelper';
import { useDidMount } from '@react-xp/core/useDidMount';
import { ThemeProvider } from '@react-xp/theme/themeProvider';
import { Box } from '@react-xp/ui/box';
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
        <h1>🚀 React XP - Docs</h1>
        <div className="my-4">test</div>
        <Box />
        {/* <Button>Click me</Button> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
