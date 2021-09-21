import React, { useState } from "react";
import { Link, makeStyles, Paper, Typography, Button } from "@material-ui/core";
import pdf from "../static/Bordenabe-Gabriel-CV.pdf";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography
          variant="h3"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          {title}
        </Typography>
        <Paper className={classes.root}>
          <div className={classes.paper}>
            <Typography variant="h5">Adress</Typography>
            <Typography variant="subtitle1">Villarica 831</Typography>
            <Typography variant="h5">Birth Day</Typography>
            <Typography variant="subtitle1">October 28, 1994</Typography>
            <Typography variant="h5">Number/Whatsapp</Typography>
            <Typography variant="subtitle1">351 506 5552</Typography>
            <Typography variant="h5">Email</Typography>
            <Typography variant="subtitle1">
              gabrielbordenabe@gmail.com
            </Typography>
            <Typography variant="h5">LinkedIn</Typography>
            <Link
              href="https://www.linkedin.com/in/gbordenabe/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="subtitle1">
                linkedin.com/in/gbordenabe
              </Typography>
            </Link>
            <Typography variant="h5">GitHub</Typography>
            <Link
              href="https://github.com/gbordenabe"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="subtitle1">github.com/gbordenabe</Typography>
            </Link>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={`./${pdf}`} download>
                Download CV
              </a>
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "90vw",
    margin: "0 auto",
  },
  paper: {
    backgroundColor: "#90caf9",
    padding: theme.spacing(5),
  },
  pdfbutton: {
    display: "flex",
    marginLeft: "auto",
    padding: theme.spacing(2),
    fontWeight: 900,
    backgroundColor: "#fff",
    "& a": {
      color: "#20AEFF",
      textDecoration: "none",
      fontWeight: 900,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default Contact;
