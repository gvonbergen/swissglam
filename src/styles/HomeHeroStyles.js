import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "105px",
    textAlign: "center",
  },
  logo: {
    marginBottom: "58px",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 226px",
  },
  line: {
    width: "587px",
    height: "1px",
    lineHeight: "1px",
    backgroundColor: "#E8E8E8",
    marginTop: "13px",
  },
  text: {
    width: "412px",
    fontFamily: "SF Pro Text",
    fontSize: "27px",
    fontWeight: "300",
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
    margin: "27px 0 6px",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  },
  flexColLg: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  },
  articles: {
    padding: "73px 185px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  articleContainer: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
  },
  articleMiddleContainer: {
    padding: "0 40px",
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  img: {},
  imgLg: {
    marginBottom: "32px",
  },
  tag: {
    fontFamily: "SF Pro Text",
    backgroundColor: "#E8EBF1",
    fontSize: "13px",
    fontWeight: "400",
    padding: "3px 8px",
    margin: "0 0 0 6px",
    whiteSpace: "nowrap",
  },
  calander: {
    width: "14.4px",
    marginLeft: "23px",
  },
  date: {
    fontFamily: "SF Pro Text",
    fontSize: "17px",
    fontWeight: "400",
    marginLeft: "14px",
    whiteSpace: "nowrap",
  },
  heading: {
    fontFamily: "Cormorant",
    fontWeight: "400",
    fontSize: "24px",
    marginTop: "12px",
    lineHeight: "24px",
  },
  headingLg: {
    fontFamily: "Cormorant",
    fontWeight: "400",
    fontSize: "35px",
    margin: "20px auto 0",
    lineHeight: "43px",
    width: "468px",
  },
  contentLg: {
    fontFamily: "SF Pro Text",
    fontSize: "16px",
    fontWeight: "300",
    margin: "10px auto 73px",
    lineHeight: "24.08px",
    width: "413px",
  },
  content: {
    fontFamily: "SF Pro Text",
    fontSize: "16px",
    fontWeight: "300",
    margin: "10px auto 73px",
    lineHeight: "24.08px",
    width: "277px",
  },
}))

export default useStyles
