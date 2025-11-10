import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

interface TileProps {
	title: string;
	href: string;
	pictureUrl?: string;
}

export default function Tile({ title, href, pictureUrl }: TileProps) {
	return (
		<a href={href} style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
            <Card
                elevation={6}
                sx={{
                    borderRadius: 3,
                    width: '100%',
                    maxWidth: 300,
                    minWidth: 300,
                    mx: 'auto',
                    /* use theme background with 0.4 opacity */
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.6),
                }}
            >
                <CardActionArea
                    sx={{
                        p: 3,
                        height: 220,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* image in document flow above the title (no border/shadow) */}
                    {pictureUrl && (
                        <Box
                            component="img"
                            src={pictureUrl}
                            alt=""
                            sx={{
                                width: 96,
                                height: 96,
                                objectFit: 'contain',
                                border: 'none',
                                boxShadow: 'none',
                                background: 'transparent',
                                pointerEvents: 'none',
                            }}
                            aria-hidden="true"
                        />
                    )}

                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>{title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
	);
}