import React from "react"
import useStyles from "../styles/EventsStyles"
import e1 from "../assets/imgs/e1.png"
import e2 from "../assets/imgs/e2.png"
import e3 from "../assets/imgs/e3.png"
import calander from "../assets/imgs/calander.svg"
import location from "../assets/imgs/location.svg"
import { Button } from "@material-ui/core"

const Events = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.line} />
        <div className={classes.text}>Upcoming Events & Tickets</div>
        <div className={classes.line} />
      </div>
      <div className={classes.events}>
        <div className={classes.flexRow}>
          <img src={e1} alt="e1" className={classes.img} />
          <div className={classes.flexCol}>
            <div className={classes.heading}>
              Zermatt Unplugged 2021 Music Festival
            </div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>July 2 - July 17</div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>Zermatt</div>
            </div>
          </div>
        </div>
        <div className={classes.flexRow}>
          <img src={e2} alt="e2" className={classes.img} />
          <div className={classes.flexCol}>
            <div className={classes.heading}>Montreux Jazz Festival 2021</div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>July 2</div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>
                Montreux Music & Convention Center
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexRow}>
          <img src={e3} alt="e3" className={classes.img} />
          <div className={classes.flexCol}>
            <div className={classes.heading}>
              Zermatt Unplugged 2021 Music Festival
            </div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>August 25</div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>Olten</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.eventCalender}>
        <Button variant="outlined" className={classes.eventBtn}>
          To Event Calender
        </Button>
      </div>
    </div>
  )
}

export default Events
