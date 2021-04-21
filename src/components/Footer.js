import React from "react"
import useStyles from "../styles/FooterStyles"
import { Button, TextField } from "@material-ui/core"
import logo from "../assets/imgs/logoWhite.svg"
import instagram from "../assets/imgs/instagram.svg"
import pinterest from "../assets/imgs/pinterest.svg"
import facebook from "../assets/imgs/facebook.svg"
import youtube from "../assets/imgs/youtube.svg"

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.line} />
        <div className={classes.text}>Subscribe</div>
        <div className={classes.line} />
      </div>
      <div className={classes.heading}>Subscribe To Swissglam Newsletter</div>
      <TextField
        id="outlined-textarea"
        placeholder="E-mail"
        variant="outlined"
        InputProps={{ className: classes.input }}
      />
      <Button classes={{ root: classes.button }}>Sign Up</Button>
      <div className={classes.foot}>
        <div className={classes.logoDiv}>
          <img src={logo} alt="logo" className={classes.logo} />
          <p className={classes.copyrights}>
            Copyright Since 2014, Swissglam Blog. All Rights Reserved
          </p>
        </div>
        <div className={classes.secondDiv}>
          <div className={classes.socialDiv}>
            <p className={classes.title}>Follow us on</p>
            <div className={classes.socialIcon}>
              <img
                src={instagram}
                alt="insta-logo"
                className={classes.instaIcon}
              />
            </div>
            <div className={classes.socialIcon}>
              <img
                src={pinterest}
                alt="pinterest-logo"
                className={classes.pintIcon}
              />
            </div>
            <div className={classes.socialIcon}>
              <img
                src={facebook}
                alt="facebook-logo"
                className={classes.facebookIcon}
              />
            </div>
            <div className={classes.socialIcon}>
              <img
                src={youtube}
                alt="youtube-logo"
                className={classes.youtubeIcon}
              />
            </div>
          </div>
          <div className={classes.emailDiv}>
            <p className={classes.email}>
              Business Inquiries: darya@swissglam.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
