import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './a1pp';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    process.env.NODE_ENV === 'production' ? (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ) : (
      <App />
    )
  );
}
