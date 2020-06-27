import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const useStyles = makeStyles((theme) => ({
  header: {
    background: "teal",
    color: "white",
    padding: 20,
    marginBottom: 40,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Header() {
  const classes = useStyles();
  console.log("header", window.location.pathname);

  return (
    <>
      <div className={classes.header}>
        {window.location.pathname !== "/" ? (
          <Link to="/">
            <ArrowBackIosIcon />
          </Link>
        ) : (
          ""
        )}

        <span>Apple iTunes</span>
      </div>
    </>
  );
}
