import './App.css';





function App() {
  return (
    <div>
      {/* ================================ start of video header ====================================== */}
      <div className='container'>
        <img height={1000} width={1600} src='https://i.imgur.com/pEXyNEx.jpg' />
        <div className='header-div'>
        <div className='combat-cafe'>
          <h1 className='cafe-name'>Combat Cafe</h1>
        </div>
        <div className='slogan'>
          <h4 className='breakfast'>Every Revolution Begins With Breakfast</h4>
        </div>
        </div>
      </div>
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
              <p>Combat Cafe in Umatilla is a home away from home for many local veterans and families.
                Beth and Bruce opened Combat Cafe to be much more than a breakfast and lunch establishment. The café has become a place of solidarity for veterans and civilians alike.
              </p>
            </div>
            <div className='info-link'>
              <a href='/about'><button className='mission-button'>Learn more</button></a>
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
            <a href='#'><button className='shop-btn'>Take a look</button></a>
            <div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ menu section ==================================== */}
      <div className='food-container'>
        <div className='food-div'>
          <img className='food' src="https://i.imgur.com/pEXyNEx.jpg" />
          <img className='food' src="https://i.imgur.com/FriG9K5.jpg" />
          <img className='food' src="https://i.imgur.com/qrKlELD.jpg" />
          <img className='food' src="https://i.imgur.com/WUZDxpb.jpg" />
        </div>
      </div>



    </div>


  )
}

export default App;
