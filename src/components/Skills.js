import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Technologies from "../components/Technologies";

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography
          variant="h3"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          {title}
        </Typography>
        <Technologies />
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
}));

export default Skills;
