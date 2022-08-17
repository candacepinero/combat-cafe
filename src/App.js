import './App.css';
import Grid from '@mui/material/Grid'




function App() {
  return (
    <div>
      {/* ================================ start of video header ====================================== */}
      <Grid className='main-img'>
        <img height={1000} width={1600} src='https://i.imgur.com/pEXyNEx.jpg' />
        <h1 className='cafe-name'>Combat Cafe</h1>
        <h4 className='breakfast'>Every Revolution Begins With Breakfast</h4>
      </Grid>
      <div className='divider'></div>
      {/* ======================== about section =============================================== */}
      {/* start of main container and image */}
      <div className='mission-container'>
        <div className='mission-div'>
          <img className='mission-img' src='https://i.imgur.com/zJb3V6K.jpg' alt='about-img' />
        </div>
        {/* start of text container */}
        <div className='ourmission-container'>
          <div className='ourmission-div'>
            <div className='text'>
              <h2 className='OurMission' >Our Mission</h2>
            </div>
            <div className='info'>
              <p>Military-themed Breakfast and Lunch Restaurant for both veterans and non-veterans to enjoy</p>
            </div>
            <div className='info-link'>
              <a href='/about'>Learn more</a>
            </div>
          </div>
        </div>
      </div>
      {/* ============================= shop section ======================================= */}
      <div className='shop-container'>
        <div className='shop-div'>
          <img className='shop-img' src='https://i.imgur.com/qrH9fAa.png' alt='shop-img' />
        </div>
        <div className='text-container'>
          <div className='text-div'>
            <h2 className='shop'>Shop</h2>
              <a href='#'>Take a look</a>
            <div>
            </div>
            </div>
        </div>
      </div>


      <Grid className='food-img'>

        <img className='food' src="https://i.imgur.com/pEXyNEx.jpg" />

      </Grid>
      <img className='food' src="https://i.imgur.com/FriG9K5.jpg" />
      <img className='food' src="https://i.imgur.com/qrKlELD.jpg" />
      <img className='food' src="https://i.imgur.com/WUZDxpb.jpg" />



    </div>


  )
}

export default App;
