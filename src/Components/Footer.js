import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
const Footer = () => {
    return (
        <Grid>
            <div className="footer">
                <img className="footer-logo" height={120} src="https://i.imgur.com/tj9vo2G.jpg"/>
                <div className="line"></div>
                <p className="footer-rights">2022 combat cafe. All rights reserved.</p>
            </div>
       </Grid>
    )
}

export default Footer;