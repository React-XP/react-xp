import { Box } from '@react-xp/core/box';
import { useHook } from '@react-xp/core/useHook';
import './App.css';

const App = () => {
  const a = useHook();

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Box />
      <code>{JSON.stringify(a)}</code>
    </div>
  );
};

export default App;
