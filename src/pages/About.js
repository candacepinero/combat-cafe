import Grid from "@mui/material/Grid"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: "https://i.imgur.com/zJb3V6K.jpg",

    },
    {

        url: "https://i.imgur.com/pC9rdDm.png",
    },
    {

        url: "https://i.imgur.com/SmIL41N.jpg"
    }
]
const About = () => {




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

            </Grid>

            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </Grid>


    )
}

export default About;