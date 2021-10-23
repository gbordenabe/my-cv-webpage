import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import photo from "../static/photo.png";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../static/Bordenabe-Gabriel-CV.pdf";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3" style={{ paddingTop: "3rem" }}>
          {title}
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            image={`./${photo}`}
            className={classes.media}
            title="picture"
          />
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Hi, I'm Gabriel Bordenabe."
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#90caf9",
              }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text="and I am full stack developer junior on MERN."
              textStyle={{
                fontSize: "1.2rem",
                fontWeight: "700px",
              }}
              startDelay={2700}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography
              variant="h6"
              color="textSecondary"
              className={classes.aboutme}
            >
              My field of studies is mainly focused on Full Stack Development
              with MERN . I started my React JS studies in 2020, since then i
              have developed many skills and got acquired technologies such as
              Mongo DB, Express JS, Node JS, Firebase, Sass, Etc. I am
              specialized in front end more than back end, but I will be
              specialized in both.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={`./${pdf}`} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
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
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "900px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  cardcontent: {
    marginTop: theme.spacing(3),
    "& h6": {
      marginTop: theme.spacing(6),
    },
  },
  aboutme: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  pdfbutton: {
    position: "absolute",
    bottom: "2.5rem",
    right: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    backgroundColor: "#90caf9",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
  },
}));

export default About;
