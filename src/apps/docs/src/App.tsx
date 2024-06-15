import { useDidMount } from '@react-xp/core/useDidMount';
import { ThemeProvider } from '@react-xp/theme/themeProvider';
import { Box } from '@react-xp/ui/box';
import './App.css';

const App = () => {
  useDidMount(() => {
    alert('works');
  });

  return (
    <ThemeProvider theme="light">
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <Box />
      </div>
    </ThemeProvider>
  );
};

export default App;
