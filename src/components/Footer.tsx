import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 3, bgcolor: 'grey.200' }}>
      <Container maxWidth={false} disableGutters sx={{ px: 5 }}>
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
        </Box>
      </Container>
    </Box>
  );
}
