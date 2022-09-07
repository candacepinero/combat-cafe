import Grid from "@mui/material/Grid"

const About = () => {
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
    
    
    
    return (
        <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid>
                {/* about story + image here */}
                <img src="https://i.imgur.com/ebsaZm1_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="about-img" />
                <Grid sx={{ position: "absolute" }} width={600} mt={-70} ml={60}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, omnis, eum suscipit temporibus ullam vero in ea facere dolorem, placeat voluptatum nemo ducimus molestiae nisi deserunt? Distinctio reiciendis incidunt delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsum maxime corrupti tenetur rerum ea sequi atque laudantium nam necessitatibus fuga! Sed similique enim alias sint accusamus adipisci beatae itaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse illo aut autem dolorum et, error minima nobis libero fugiat natus ipsam architecto quaerat molestias officia pariatur obcaecati sapiente tempora soluta! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores amet veritatis tempora incidunt facilis doloremque deleniti voluptate aliquam consequuntur aperiam quidem, suscipit quis illo eaque illum, deserunt temporibus praesentium nulla!</p>
                </Grid>
            </Grid>
            <Grid container
                justifyContent="center"
                alignItems="baseline"
                mt={5}
            >
                {/* slide show here */}
                {/* <div className="slideshow-container">
                    <div className="mySlides fade">
                        <a href="https://www.clickorlando.com/video/community/2022/07/13/veteran-owned-caf-struggling-with-inflation-saved-by-community-in-lake-county/?fbclid=IwAR33b3sD8V6i0vUrrOUMunfE7LVgdhIe1E7XpCLspnxaW_qBMehdiZtbZe4"><img src="https://i.imgur.com/pC9rdDm.png" style={{ width: "100%" }} /></a>
                        <div className="slideshow-text">slide 1</div>
                    </div>
                    <div className="mySlides fade">
                        <a href="https://www.dailycommercial.com/story/news/local/umatilla/2022/07/12/umatillas-combat-cafe-reopen-after-community-steps-help/10037326002/?fbclid=IwAR17Mvhqiw4C528nTZn8cHo_Kdg-Neh3FPmaB_I5rwxxTcD1dS5WA7wfdWw"><img src="https://i.imgur.com/zJb3V6K.jpg" style={{ width: "100%" }} /></a>
                        <div className="slideshow-text">slide 2</div>
                    </div>
                    <div className="mySlides fade">
                        <img src="https://i.imgur.com/SmIL41N.jpg" style={{ width: "100%" }} />
                        <div className="slideshow-text">slide 3</div>
                    </div>
                    <br />

                    <div style={{ textAlign: "center" }}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                </div> */}

            </Grid>
            <Grid>
                {/* link to social and contact here */}
            </Grid>
        </Grid>
    )
}

export default About;