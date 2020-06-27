import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Header from "./header";
import { Chip } from "@material-ui/core";
import { Redirect } from "@reach/router";

const styles = makeStyles((theme) => ({
  card: {
    borderRadius: 10,
    maxWidth: "80vw",
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    padding: "3%",
    display: "flex",
    flexDirection: "row-reverse",
    background: "#485461",
    backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit,
    },
  },
  artistinfo: {
    width: "60%",
  },
  trackinfo: {
    width: "40%",
    color: "white",
  },
  img: {
    borderRadius: 10,
  },
  chip: {
    color: "white",
    background: "teal",
    textTransform: "capitalize",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));
export default DetailCard;

function DetailCard(props) {
  const classes = styles();
  if (props.location.state) {
    const track_details = props.location.state.track;
    console.log("track_details", track_details);

    return (
      <>
        <Header />
        <Card className={classes.card}>
          <CardMedia className={classes.media}>
            {/* ARTIST INFO */}
            <div className={classes.artistinfo}>
              <img
                src={track_details["im:image"][2].label}
                className={classes.img}
                alt="album art"
              />

              <Typography className={classes.link} variant={"h6"} gutterBottom>
                {track_details["im:artist"].label}
              </Typography>
            </div>

            {/* TRACK INFO */}
            <div className={classes.trackinfo}>
              <a
                href={track_details.id.label}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  {track_details["im:name"].label}
                </Typography>
              </a>

              <a
                href={track_details.category.attributes.scheme}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chip
                  variant="outlined"
                  label={track_details.category.attributes.label}
                  className={classes.chip}
                />
              </a>

              <CardContent>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  {" "}
                  Price :
                  <a href={track_details.id.label} target="_blank" rel="noopener noreferrer">
                    {" " + track_details["im:price"].label}
                  </a>
                </Typography>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Released On :{" "}
                  {track_details["im:releaseDate"].attributes.label}
                </Typography>
              </CardContent>
            </div>
          </CardMedia>

          {/* COPYRIGHTS */}
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              {track_details.rights.label}
            </Typography>
            <Divider className={classes.divider} light />
          </CardContent>
        </Card>
      </>
    );
  } else return <Redirect from="details/:userId" to="/" />;
}
