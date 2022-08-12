import './App.css';
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box'



function App() {
  return (
    <Grid>
      <Grid className='main-img'>
        <img height={1000} width={1600} src='https://i.imgur.com/pEXyNEx.jpg' />
        <Typography className='cafe-name' variant='h1' color={"white"}>Combat Cafe</Typography>
        <Typography className='breakfast' variant='h4' color={"white"}>Every Revolution Begins With Breakfast</Typography>
      </Grid>
      <Grid>
        <div className='divider'></div>
        <img className='mission' src='https://i.imgur.com/ebsaZm1.jpg' />
        <Box className='mission-box'><Typography className='OurMission' variant='h2' color={"white"}>Our Mission</Typography></Box>
      </Grid>
      <Grid>
        <img className='food' src="https://i.imgur.com/pEXyNEx.jpg" />
        <img className='food' src="https://i.imgur.com/FriG9K5.jpg" />
        <img className='food' src="https://i.imgur.com/qrKlELD.jpg" />
        <img className='food' src="https://i.imgur.com/WUZDxpb.jpg" />

      </Grid>


    </Grid>


  )
}

export default App;
