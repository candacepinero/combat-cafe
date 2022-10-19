import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Shop = () => {
    return (
        <Grid container>
            <Grid item margin={5}>
                <Card variant="outlined" sx={{ maxWidth: 345, bgcolor: "#232323" }} >

                    <CardMedia
                        component="img"
                        height="500"
                        image="https://i.imgur.com/NhXd1Qr.jpg"
                        alt="green iguana"


                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color={"white"}>
                            Combat Cafe t-shirt
                        </Typography>
                        <Typography variant="body2" color={"white"}>
                            Our first batch of t-shirts are in! Stop in and grab a Combat Cafe T-shirt for $20 and help support our local cafe.
                            We have S, M, L and XL. Limited quantities.
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item margin={5}>
                <Card variant='outlined' sx={{ maxWidth: 345, bgcolor: "#232323" }}>

                    <CardMedia
                        component="img"
                        height="500"
                        image="https://i.imgur.com/zLItrPK.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color={"white"}>
                            Combat Cafe t-shirt
                        </Typography>
                        <Typography variant="body2" color={"white"}>
                            New special edition shirts are in stock @ Combat Cafe Hurry and get one before they're gone. $20 and help support our local cafe.
                            We have S, M, L and XL. Limited quantities.
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    )
}

export default Shop