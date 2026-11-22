import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TilesGrid from './components/TilesGrid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0870c8" },
    secondary: { main: "#ffee8cff" },
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: { xs: 'calc(100% - 2px)', sm: '85%', md: '75%' },
            maxWidth: 1200,
            mx: 'auto',
            overflowX: 'clip',
            px: { xs: 1, sm: 2 },
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: 'center', alignItems: 'center', gap: 2, mt: 2, mb: 5, width: '100%' }}>
          <Box component="img" src="/logo.png" alt="logo" sx={{ maxWidth: { xs: 96, sm: 'none' }, height: 'auto' }} />
          <Typography variant="h1" sx={{ fontWeight: 600, textAlign: { xs: 'center', sm: 'left' }, color: 'primary.main', fontSize: { xs: '2.5rem', sm: '4rem', lg: '6rem' } }}>
            VŠTJ Technika Praha
          </Typography>
        </Box>
        
        <Typography variant="body1" sx={{ textAlign: 'justify',  maxWidth: '75%' }}>
          VŠTJ Technika Praha z.s. je tělovýchovná jednota spojená s ČVUT v Praze, která podporuje široký rozvoj tělesné výchovy a sportu mezi akademickou obcí i veřejností.
Jednota sdružuje a provozuje řadu sportovních oddílů a organizuje účast svých členů na domácích i zahraničních soutěžích.
        </Typography>

        <Button
        component="a"
        href="https://www.utvs.cvut.cz/reprezentace-a-vstj/vstj-technika-praha.html"
        variant="contained"
        color="primary"
        sx={{
          color: '#fff',
          '&:hover': {
            color: '#fff',
          },
        }}>
        Více informací
      </Button>

        <Box sx={{ minHeight: '50dvh', display: 'flex', flexDirection: 'column' }}>
          <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6, px: { xs: 0, sm: 4 } }}>
            <TilesGrid />
          </Box>
        </Box>
      </Box>

        <Footer />


        
    </ThemeProvider>
  );
}