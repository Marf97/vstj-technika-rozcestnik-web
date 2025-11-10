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
            width: { xs: '92%', sm: '85%', md: '75%' }, // mobile -> tablet -> desktop
            maxWidth: 1200,                             // optional cap
            mx: 'auto',
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
          }}
        >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2, mb: 5 }}>
          <Box component="img" src="/logo.png" alt="logo" />
          <Typography variant="h1" sx={{ fontWeight: 600, textAlign: 'left', color: 'primary.main' }}>
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
          <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6, px: 4 }}>
            <TilesGrid />
          </Box>
        </Box>
      </Box>

        <Footer />


        
    </ThemeProvider>
  );
}