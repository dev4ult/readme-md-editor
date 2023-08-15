import { ThemeProvider } from '@/components/theme-provider';
import ContentCenter from './components/content-center';
import Home from './pages/home';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContentCenter>
        <Home />
      </ContentCenter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
