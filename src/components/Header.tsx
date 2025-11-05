import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export interface HeaderProps {
  onNavigate: (to: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button onClick={() => onNavigate('/')} sx={{ textTransform: 'none', color: 'inherit', p: 0, minWidth: 'auto' }}>
            <Typography variant="h6" component="div">
              VŠTJ Technika Praha
            </Typography>
          </Button>
        </Box>
        <Button color="inherit" onClick={() => onNavigate('/o-nas')}>O nás</Button>
        <Button color="inherit" onClick={() => onNavigate('/kontakt')}>Kontakt</Button>
      </Toolbar>
    </AppBar>
  );
}
