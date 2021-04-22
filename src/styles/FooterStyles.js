import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    padding: "84px 0 0",
    textAlign: "center",
    backgroundColor: "#F9F9F9",
    width: "1924px",
    margin: "0 auto",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "35px",
  },
  line: {
    width: "640px",
    height: "1px",
    lineHeight: "1px",
    backgroundColor: "#D3D0D0",
    marginTop: "13px",
  },
  text: {
    fontFamily: "SF Pro Text",
    fontSize: "22px",
    fontWeight: "300",
    padding: "0 28px",
  },
  heading: {
    fontFamily: "Cormorant",
    fontSize: "35px",
    fontWeight: "400",
  },
  input: {
    borderRadius: "0 !important",
    border: "1px solid #E9E9E9",
    padding: "13px 24px !important",
    fontWeight: "400",
    fontSize: "17px",
    color: "#AFAFAF",
    backgroundColor: "#ffffff",
    width: "397px",
    margin: "33px 0 100px",
    "& .MuiInputBase-input": {
      padding: "0 !important",
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "#000000",
      color: "#ffffff",
      fontSize: "19px",
      padding: "7px 59px",
      borderRadius: "0",
      margin: "33px 0 100px 17px",
    },
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "19px",
    fontFamily: "SF Pro Text",
    padding: "7px 59px",
    borderRadius: "0",
    margin: "33px 0 100px 17px",
    textTransform: "none",
    fontWeight: "400",
  },
  foot: {
    backgroundColor: "#242424",
    display: "flex",
    height: "179px",
    justifyContent: "space-between",
    padding: "47px 226px 0",
  },
  logoDiv: {
    display: "flex",
    flexDirection: "column",
  },
  copyrights: {
    fontFamily: "SF Pro Text",
    fontSize: "18px",
    fontWeight: "400",
    color: "#FFFFFF",
  },
  logo: {
    width: "226px",
    height: "35px",
    marginBottom: "33px",
  },
  secondDiv: {
    display: "flex",
    flexDirection: "column",
  },
  socialDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "400",
    color: "#ffffff",
    marginTop: "13px",
  },
  socialIcon: {
    width: "46px",
    height: "46px",
    backgroundColor: "#353535",
    borderRadius: "50%",
  },
  emailDiv: {
    marginTop: "26px",
  },
  email: {
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "400",
    color: "#ffffff",
  },
  instaIcon: {
    marginTop: "7px",
  },
  pintIcon: {
    marginTop: "11px",
  },
  facebookIcon: {
    marginTop: "13px",
  },
  youtubeIcon: {
    marginTop: "16px",
  },
}))

export default useStyles
