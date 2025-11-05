import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface TileProps {
	title: string;
	href: string;
}

export default function Tile({ title, href }: TileProps) {
	return (
		<a href={href} style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
			<Card elevation={6} sx={{ borderRadius: 3, width: '100%', maxWidth: 300, minWidth: 300, mx: 'auto' }}>
				<CardActionArea sx={{ p: 5, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<CardContent sx={{ textAlign: 'center' }}>
						<Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>{title}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</a>
	);
}