import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: "0",
    },
  },
  root: {
    backgroundColor: "#F9F9F9",
    padding: "85px 226px",
    marginTop: "51px",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "79px",
  },
  line: {
    width: "562px",
    height: "1px",
    lineHeight: "1px",
    backgroundColor: "#E8E8E8",
    marginTop: "13px",
  },
  text: {
    fontFamily: "SF Pro Text",
    fontSize: "22px",
    fontWeight: "300",
    width: "412px",
    padding: "0 26px",
    textAlign: "center",
  },
  events: {
    display: "flex",
    justifyContent: "space-between",
  },
  eventCalender: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
  calander: {
    width: "14.4px",
  },
  eventBtn: {
    width: "239px",
    border: "1px solid black !important",
    fontWeight: "400 !important",
    fontSize: "19px !important",
    margin: "45px 0 0 !important",
    borderRadius: "0 !important",
    fontFamily: "SF Pro Text !important",
    textTransform: "none !important",
  },
  flexRow: {
    display: "inline-flex",
    width: "431px",
    justifyContent: "space-between",
  },
  flexRowInner: {
    display: "flex",
  },
  flexCol: {
    padding: "15px 0 20px 36px",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Cormorant",
    fontWeight: "400",
    fontSize: "24px",
  },
  date: {
    fontFamily: "SF Pro Text",
    fontSize: "16px",
    fontWeight: "300",
    marginLeft: "15px",
  },
  location: {
    fontFamily: "SF Pro Text",
    fontSize: "16px",
    fontWeight: "300",
    marginLeft: "15px",
  },
}))

export default useStyles
