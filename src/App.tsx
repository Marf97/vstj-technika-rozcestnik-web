import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import TilesGrid from './components/TilesGrid';
import { useEffect, useState } from 'react';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#de403a" },
    secondary: { main: "#ffd400" },
  },
});

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function navigateTo(to: string) {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
  }

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
          <Header onNavigate={navigateTo} />

          {
          path === '/o-nas' ? (<About />) :
          path === '/kontakt' ? (<Contact />) : 
          (
            <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6, px: 4 }}>
              <TilesGrid />
            </Box>
          )}

          <Footer />
        </Box>
        
    </ThemeProvider>
  );
}