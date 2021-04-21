import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    padding: "83px 226px 0",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "45px",
  },
  line: {
    width: "661px",
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
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  padd: {
    padding: "0 33px",
  },
  button: {
    width: "239px",
    border: "1px solid black !important",
    fontWeight: "400 !important",
    fontSize: "19px !important",
    margin: "45px 0 100px !important",
    borderRadius: "0 !important",
    fontFamily: "SF Pro Text !important",
    textTransform: "none !important",
  },
}))

export default useStyles
