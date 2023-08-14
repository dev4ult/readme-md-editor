// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { ThemeProvider } from '@/components/theme-provider';
import Home from './pages/home';
// import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
