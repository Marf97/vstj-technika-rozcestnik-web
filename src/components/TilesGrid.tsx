import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tile from './Tile';

export default function TilesGrid() {
  const tiles = [
    { title: 'Tenis', href: 'https://tenis.technika-praha.cz', pictureUrl: '/tennis.png' },
    { title: 'Jachting', href: 'https://jachting.technika-praha.cz', pictureUrl: '/sailing-boat.png' },
];
  
  const CARD_W = 300;

  return (
    <Box 
        sx={{ 
            width: '100%',
            maxWidth: 1200,
            mx: 'auto',
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
        }}
    >
      
      <Typography variant="h2" sx={{ fontWeight: 600, textAlign: 'center', mt: 2 }}>
        Naše oddíly
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {tiles.map((t) => (
          <Box key={t.title} sx={{ width: CARD_W }}>
              <Tile title={t.title} href={t.href} pictureUrl={t.pictureUrl} />
          </Box>
        ))}
      </Box>

    </Box>
  );
}
