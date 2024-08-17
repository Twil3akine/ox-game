import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
