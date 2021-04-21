import React from "react"
import useStyles from "../styles/HomeHeroStyles"
import logo from "../assets/imgs/logo.svg"
import calander from "../assets/imgs/calander.svg"
import ar1 from "../assets/imgs/ar1.png"
import ar2 from "../assets/imgs/ar2.png"
import ar3 from "../assets/imgs/ar3.png"
import ar4 from "../assets/imgs/ar4.png"
import ar5 from "../assets/imgs/ar5.png"

const HomeHero = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />

      <div className={classes.textContainer}>
        <div className={classes.line} />
        <div className={classes.text}>The Latest Articles</div>
        <div className={classes.line} />
      </div>

      <div className={classes.articles}>
        <div className={classes.articleContainer}>
          <div className={classes.flexCol}>
            <img src={ar1} alt="ar1" className={classes.img} />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>November 17,2020</div>
            </div>
            <div className={classes.heading}>Schloss Hotel Zermatt 2020</div>
            <div className={classes.content}>
              The family-run Schloss Hotel Zermatt reopened its doors...
            </div>
          </div>
          <div className={classes.flexCol}>
            <img src={ar2} alt="ar2" className={classes.img} />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Shopping</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>November 17,2020</div>
            </div>
            <div className={classes.heading}>
              Jelmoli at The Cirlce - Zurich Airport
            </div>
            <div className={classes.content}>
              The family-run Schloss Hotel Zermatt reopened its doors...
            </div>
          </div>
        </div>
        <div className={classes.articleMiddleContainer}>
          <div className={classes.flexColLg}>
            <img src={ar3} alt="ar5" className={classes.imgLg} />
            <div className={classes.flexRow + " " + classes.mLeftNegative}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>November 17,2020</div>
            </div>
            <div className={classes.headingLg}>
              Valentine’s Gourmet Getaway By Park Hyatt Zurich
            </div>
            <div className={classes.contentLg}>
              Park Hyatt Zurich Has Prepared Something Special For The Romantic
              Endeavours This Valentine’s Day
            </div>
          </div>
        </div>

        <div className={classes.articleContainer}>
          <div className={classes.flexCol}>
            <img src={ar4} alt="ar4" className={classes.img} />
            <div className={classes.flexRow}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>November 17,2020</div>
            </div>
            <div className={classes.heading}>
              Dolder Lodge 2020: Winter Menu...
            </div>
            <div className={classes.content}>
              Prepare For The Coolest Ski Experience At Dolder Lodge...
            </div>
          </div>
          <div className={classes.flexCol}>
            <img src={ar5} alt="ar5" className={classes.img} />
            <div className={classes.flexRow + " " + classes.mLeftNegative}>
              <div className={classes.tag}>Bars & Restaurants</div>
              <div className={classes.tag}>Hotels</div>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>November 17,2020</div>
            </div>
            <div className={classes.heading}>
              ONYX Bar of Senses by Dior x Moët & Chandon
            </div>
            <div className={classes.content}>
              The family-run Schloss Hotel Zermatt reopened its doors...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeHero
