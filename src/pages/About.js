import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link } from "@mui/material"
import 'react-slideshow-image/dist/styles.css'
import { Typography } from "@mui/material"

const About = () => {
    const slideImages = [
        {
            url: "src/images/Screen Shot 2022-08-29 at 8.22.39 PM.png",

        },
        {

            url: "https://i.imgur.com/pC9rdDm.png",
        },
        {

            url: "https://i.imgur.com/SmIL41N.jpg"
        }
    ]





    return (
        <Grid container spacing={2} >
            <Grid item xs={3}>
                <img height={300} width="100%" src="https://i.imgur.com/ebsaZm1_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/KxQEGUP.jpg" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/S8ghHJm.jpg" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/mARM4Bs.jpg" alt="about-img" />
            </Grid>

            <Grid item xs={6} >

                <Typography variant="h1" align="center" fontFamily={"Black Ops One"} color={"#5f7f01"}>Combating Hunger</Typography>

                <Box border={"solid 2px #a2c17c"}>
                    <Typography variant="h2" align="center" fontFamily={"Black Ops One"}>About The Owners</Typography>


                    <img height="100%" width="100%" src="https://i.imgur.com/zJb3V6K.jpg" alt="about-pic" />
                    <Typography variant="h6" align="center">Adopted from a news story by keith Oliver </Typography>
                    <Typography variant="body2" align="center">Army Veteran Bruce Chambers and his wife, Beth, opened Combat Cafe in May 2018 originally in Eustis but moved to its current location in Umatilla in 2020. The two met not long after Bruce returned from his wartime deployment, at Tavares' Wooton Park. Bruce worked at various places after acclimating back into civilian life, including Sunrise Grill in Tavares where he rekindled his passion for service. "Within a couple of years, we were regularly talking and dreaming about restaurant plans and where we saw that the old Huddle House property was vacant," Beth said. "Bruce fell in love with the idea of turning it into a military-themed diner." For Bruce patience and multiple jobs followed, including pizza delivery, a "very valued" stint at Jimmy John’s, and waiting tables at Cracker Barrel in Leesburg. The 3rd Infantry Division soldier was also heavy into studies at vet-family University of Central Florida and was mentored by Vietnam/Korea Era Veteran Army Retired Major James Rosengren. All the while, he was being treated for PTSD, a subject he is quite candid about. "Therapy works," reports Bruce in a voice which blends conviction with kindness. "So does being around others who have been there." "Even here at the diner, that's part of our mission - to create a place that is actually therapeutic... a safe haven, if you will." Bruce's own need for such began with three particular buddies. Army Sgt. Allen A. Greka (after whom Combat Cafe has named a Greek omelet) died of wounds from a landmine detonation in Diyala, Iraq. “Three tourniquets	could not save him,” Chambers said. “And of the two guys I enlisted with in Raleigh, North Carolina, one (Dan O’Leary) never made it back,” he said. “And the other (Vance Rigsbee) was badly injured in a vehicle rollover.” Chambers is also committed to hiring and training veterans, “especially if they need a little help getting their lives back on track. “ It’s a practice he learned from one of his mentors, Eustis businessman and Marine Dan Kelsey. As the blended-family parents of five children aged three through 16, time management has become an area of impressive expertise for Bruce and Beth. Thus, at the Combat Cafe, watching the couple in action is a cross between two-stepping and tactful diplomacy as they swiftly take orders for such favorites as The Hamilton (“Every Revolution Begins With Breakfast”),  The Chuck Norris (Grilled chicken breast in honor of “an Air Force veteran and a badass”) and discontinued item Vinnie’s S.O.S (a homage to World War II Navy veteran Vincent T.King of the USS Gannet). The hustle-bustle and the resulting good chow do not happen by accident, “We are greatly blessed,” said Bruce. “We know that.
                    </Typography>
                    <Link to='/'><Button >Back To Home Page</Button></Link>

                </Box>
                <Typography variant="h2" align="center" fontFamily={"Black Ops One"} color={"#5f7f01"} >
                    Creating Community
                </Typography>

            </Grid>

            <Grid item xs={3}  >
                {/* about story + image here */}
                <img height={300} width="100%" src="https://i.imgur.com/ebsaZm1_d.jpg?maxwidth=520&shape=thumb&fidelity=high" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/KxQEGUP.jpg" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/S8ghHJm.jpg" alt="about-img" />
                <img height={300} width="100%" src="https://i.imgur.com/mARM4Bs.jpg" alt="about-img" />
            </Grid>
            <Grid item fontFamily={"Black Ops One"} color={"#4c9600"} fontSize={30}>
            </Grid>
        </Grid>
    );




    {/* <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ "backgroundImage": `url(${slideImage.url})` }}>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div> */}



}

export default About;