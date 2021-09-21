import React from "react";
import csharp from "../static/csharp.png";
import python from "../static/python.png";
import javascript from "../static/javascript.png";
import css from "../static/css.png";
import html5 from "../static/html5.png";
import sql from "../static/sql.png";
import reactimg from "../static/react.png";
import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineContent,
} from "@material-ui/lab";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import StarRating from "./StarRating";

const Technologies = () => {
  const classes = useStyles();
  console.log(sql)
  console.log(python)
  console.log(reactimg)
  const skills = [
    {
      year: "2021",
      src: `./${reactimg}`,
      title: "React",
      stars: 2,
    },
    {
      year: "2021",
      src: sql,
      title: "SQL",
      stars: 2,
    },
    {
      year: "2020",
      src: javascript,
      title: "Javascript",
      stars: 3,
    },
    {
      year: "2020",
      src: css,
      title: "CSS 3",
      stars: 2,
    },
    {
      year: "2020",
      src: html5,
      title: "HTML 5",
      stars: 2,
    },
    {
      year: "2020",
      src: python,
      title: "Python",
      stars: 1,
    },
    {
      year: "2014",
      src: csharp,
      title: "C#",
      stars: 3,
    },
  ];

  return (
    <Timeline aling="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <img src={src} aly={title} className={classes.customlogo} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <StarRating stars={stars} />
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  customlogo: {
    width: "25px",
  },
  paper: {
    padding: "6px 16px",
    maxWidth: "200px",
  },
}));

export default Technologies;
