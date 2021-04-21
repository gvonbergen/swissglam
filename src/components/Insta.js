import React from "react"
import useStyles from "../styles/InstaStyles"
import insta1 from "../assets/imgs/insta1.png"
import insta2 from "../assets/imgs/insta2.png"
import insta3 from "../assets/imgs/insta3.png"
import { Button } from "@material-ui/core"

const Insta = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.line} />
        <div className={classes.text}>Instagram</div>
        <div className={classes.line} />
      </div>
      <div className={classes.imgContainer}>
        <img src={insta1} alt="insta1" />
        <img src={insta2} alt="insta2" className={classes.padd} />
        <img src={insta3} alt="insta3" />
      </div>
      <Button classes={{ root: classes.button }} disableRipple>
        Follow
      </Button>
    </div>
  )
}

export default Insta
