import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import mockData from "../mockData";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3" style={{ paddingTop: "3rem" }}>
          {title}
        </Typography>
        <Grid container className={classes.grid}>
          {mockData.map(({ title, image, link }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.caratula}
                  image={image}
                  title={title}
                />
                <CardContent>
                  <Link
                    href={link}
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
  grid: {
    marginTop: theme.spacing(3),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(2),
  },
  caratula: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

export default MyWork;
