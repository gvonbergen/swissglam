import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  ClickAwayListener,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "../styles/HeaderStyles"
import { Cancel } from "@material-ui/icons"

const Header = props => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [showTabs, setshowTabs] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)
  const [search, setSearch] = useState("")

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleSearch = (v = true, clearSearch = false) => {
    if (search.trim() === "" && v && !clearSearch) {
      setshowTabs(true)
    } else if (clearSearch) {
      setshowTabs(v)
      setSearch("")
    } else setshowTabs(false)
  }

  const renderMenu = (
    <Menu
      MenuListProps={{ disablePadding: true }}
      id="simple-menu"
      className={classes.popupMenu}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Art
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Exhibition
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Fashion Events
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Festivals
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Film
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Music
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.menuItem}>
        Sports
      </MenuItem>
    </Menu>
  )

  return (
    <ClickAwayListener onClickAway={toggleSearch}>
      <div>
        <AppBar
          color={"transparent"}
          elevation={0}
          position=""
          style={{ width: "1924px", padding: "0 226px" }}
        >
          <Toolbar className={showTabs ? classes.toolbar : classes.reverse}>
            <Tabs
              className={showTabs ? classes.root : classes.hideRoot}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              TabIndicatorProps={{
                style: {
                  height: "1px",
                  color: "#000000",
                },
              }}
              textColor="inherit"
            >
              <Tab label="Home" className={classes.headerText} />
              <Tab
                label="Events"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.headerText}
              />
              <Tab label="Shopping" className={classes.headerText} />
              <Tab label="Bars & Restaurants" className={classes.headerText} />
              <Tab label="Hotels" className={classes.headerText} />
              <Tab label="Health" className={classes.headerText} />
              <Tab label="Travel" className={classes.headerText} />
              <Tab label="About" className={classes.headerText} />
              <Tab label="Event & Tickets" className={classes.headerText} />
            </Tabs>
            <div className={classes.sec2}>
              <div className={classes.searchContainer}>
                <div className={classes.line} />
                <div
                  aria-hidden="true"
                  className={classes.search}
                  onClick={() => toggleSearch(!showTabs)}
                >
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                </div>
                {!showTabs && (
                  <InputBase
                    aria-hidden="true"
                    onChange={e => setSearch(e.target.value)}
                    classes={{
                      root: showTabs ? classes.inputRoot : classes.inputField,
                      input: classes.inputInput,
                    }}
                    value={search}
                    endAdornment={
                      <Cancel
                        color="disabled"
                        onClick={() => {
                          setSearch("")
                          toggleSearch(!showTabs, true)
                        }}
                        className={classes.closeIcon}
                      />
                    }
                  />
                )}
                <div className={classes.line} />
              </div>

              <Button
                className={
                  classes.appBarItems +
                  " " +
                  classes.lang +
                  " " +
                  classes.langSelected
                }
              >
                English
              </Button>
              <Button className={classes.appBarItems + " " + classes.lang}>
                Pусский
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    </ClickAwayListener>
  )
}

export default Header
