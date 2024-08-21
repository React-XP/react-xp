import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Storybook</h1>
  </StrictMode>,
);
