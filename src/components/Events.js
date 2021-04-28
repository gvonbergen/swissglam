import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import useStyles from "../styles/EventsStyles"
import calander from "../assets/imgs/calander.svg"
import location from "../assets/imgs/location.svg"
import { Button } from "@material-ui/core"

const LatestEvents = graphql`
  query {
    allWpEvent {
      edges {
        node {
          slug
          title
          excerpt
          content
          startDate
          endDate
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
          eventsCategories {
            nodes {
              name
            }
          }
          organizers {
            nodes {
              title
            }
          }
          venue {
            city
          }
        }
      }
    }
  }
`

const Events = () => {
  const eventsQuery = useStaticQuery(LatestEvents)
  const firstEvent = eventsQuery.allWpEvent.edges[0]
  const secondEvent = eventsQuery.allWpEvent.edges[1]
  const thirdEvent = eventsQuery.allWpEvent.edges[2]
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
          <img
            src={firstEvent.node.featuredImage.node.sourceUrl}
            alt="e1"
            className={classes.img}
          />
          <div className={classes.flexCol}>
            <div className={classes.heading}>{firstEvent.node.title}</div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(firstEvent.node.startDate).format("MMM DD")} -{" "}
                {moment(firstEvent.node.endDate).format("MMM DD")}
              </div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>
                {firstEvent.node.venue.city}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexRow}>
          <img
            src={secondEvent.node.featuredImage.node.sourceUrl}
            alt="e2"
            className={classes.img}
          />
          <div className={classes.flexCol}>
            <div className={classes.heading}>{secondEvent.node.title}</div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(secondEvent.node.startDate).format("MMM DD")} -{" "}
                {moment(secondEvent.node.endDate).format("MMM DD")}
              </div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>
                {secondEvent.node.venue.city}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexRow}>
          <img
            src={thirdEvent.node.featuredImage.node.sourceUrl}
            alt="e3"
            className={classes.img}
          />
          <div className={classes.flexCol}>
            <div className={classes.heading}>{thirdEvent.node.title}</div>
            <div className={classes.flexRowInner}>
              <img src={calander} alt="calander" className={classes.calander} />
              <div className={classes.date}>
                {moment(thirdEvent.node.startDate).format("MMM DD")}
              </div>
            </div>
            <div className={classes.flexRowInner}>
              <img src={location} alt="location" />
              <div className={classes.location}>
                {thirdEvent.node.venue.city}
              </div>
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
