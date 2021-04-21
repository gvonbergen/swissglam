import { makeStyles, fade } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  reverse: {
    flexDirection: "row-reverse",
    minHeight: "auto !important",
    borderBottom: "1px solid #E8E8E8",
    padding: "0 !important",
  },
  root: {
    flexGrow: 1,
    minHeight: 54,
    "& button": {
      minWidth: "112px",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#000000",
    },
  },
  hideRoot: {
    "& div": {
      display: "none",
    },
  },
  toolbar: {
    minHeight: "auto !important",
    borderBottom: "1px solid #E8E8E8",
    padding: "0 !important",
    "& .MuiTabs-scroller": {
      position: "relative",
      height: "54px",
    },
  },
  dInline: {
    display: "inline",
  },
  appBarItems: {
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "0",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#fff",
      textDecoration: "underline",
    },
    "&:focus": {
      borderBottom: "1px solid black",
      textDecoration: "none",
      padding: "10px 19px",
    },
  },
  line: {
    height: "35px",
    borderLeft: "1px solid #C4C4C4",
  },
  searchContainer: {
    display: "inline-flex",
    position: "relative",
    top: "10px",
    padding: "0 10px",
  },
  search: {
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(1),
      // width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "60px",
  },
  inputField: {
    color: "inherit",
    width: "auto",
    transition: "all ",
  },
  inputInput: {
    [theme.breakpoints.up("sm")]: {
      // width: '12ch',
      "&:focus": {
        // width: "auto",
      },
    },
  },
  closeIcon: {
    paddingRight: "16px",
    cursor: "pointer",
  },
  lang: {
    fontSize: "15px",
    opacity: 0.7,
  },
  langSelected: {
    borderBottom: "1px solid black",
  },
  menuItem: {
    backgroundColor: "#F9F9F9",
    borderBottom: "1px solid #ECECEC",
    fontSize: "16px",
    padding: "15px 10px 6px 34px",
  },
  popupMenu: {
    "& .MuiMenu-paper": {
      top: "56px !important",
    },
  },
  headerText: {
    fontFamily: "SF Pro Text",
    fontSize: "16px",
    fontWeight: "400",
    textTransform: "none",
  },
}))

export default useStyles
