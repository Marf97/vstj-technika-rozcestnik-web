import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 3, bgcolor: 'grey.100' }}>
      <Container maxWidth={false} disableGutters sx={{ px: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 2 
        }}>
          <Typography variant="body2" color="text.secondary">
            VŠTJ Technika Praha Strojní <br />
            Karlovo náměstí 293/13 <br />
            120 00 Praha 2 <br />
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" target="_blank" rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" target="_blank" rel="noopener" aria-label="YouTube">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
