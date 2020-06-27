import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    width: "80vw",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    background: "#f5f5f5",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "30%",
  },

  title: {
    fontSize: 0,
    lineHeight: 0,
  },
  sub_details: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function ListCard(props) {
  const classes = useStyles();

  return (
    <Link
      to={`details/${props.track.id.attributes["im:id"]}`}
      state={{ track: props.track }}
    >
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography>{props.track["im:name"].label} </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.track["im:artist"].label}
            </Typography>
            <div className={classes.sub_details}>
              <Chip
                variant="outlined"
                label={props.track.category.attributes.label}
                style={{
                  background: "teal",
                  color: "white",
                  width: "fit-content",
                  marginBottom: 10,
                }}
              />
              <Typography
                variant="p"
                color="textPrimary"
                style={{ textDecoration: "none", fontSize: "small" }}
              >
                Released on :{" "}
                <Typography variant="p" color="textSecondary">
                  {props.track["im:releaseDate"].attributes.label}
                </Typography>
              </Typography>

              <Typography
                variant="p"
                color="textPrimary"
                style={{ textDecoration: "none", fontSize: "small" }}
              >
                Price :{" "}
                <Typography variant="p" color="textSecondary">
                  {props.track["im:price"].label}
                </Typography>
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.track["im:image"][2].label}
          title={props.track.title.label}
        />
      </Card>
    </Link>
  );
}
