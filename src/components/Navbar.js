import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

const links = [
  {
    id: "about",
    text: "About me",
    icon: <InfoTwoToneIcon fontSize="large" />,
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsTwoToneIcon fontSize="large" />,
  },
  {
    id: "work",
    text: "My work",
    icon: <BuildTwoToneIcon fontSize="large" />,
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactMailTwoToneIcon fontSize="large" />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.name} variant="h5" color="primary">
            <Link
              to={"about"}
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-70}
            >
              GABRIEL BORDENABE
            </Link>
          </Typography>
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <CancelIcon fontSize="large" color="primary" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#90caf9",
      borderBottom: "3px solid #90caf9",
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  sidebar: {
    width: "40vsw",
    [theme.breakpoints.down("sm")]: {
      width: "60vsw",
    },
    "& h5": {
      margin: theme.spacing(3, 0, 0, 1),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#90caf9",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
