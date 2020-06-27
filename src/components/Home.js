import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import SearchIcon from "@material-ui/icons/Search";
import {
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import Header from "./header";
import {
  SortByArtist_ZA,
  SortByPrice_LH,
  SortByArtist_AZ,
  SortByPrice_HL,
  SortDate_NewFirst,
  SortDate_OldFirst,
} from "../utils/functions";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    width: "70%",
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    justifyContent: "center",
    borderRadius: 50,
    [theme.breakpoints.up("sm")]: {},
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  formControl: {
    marginBottom: 30,
    minWidth: 160,
    background: "whitesmoke",
    borderRadius: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  operators: {},
}));

function Home() {
  const [LIST, SET_LIST] = useState([]);
  const [value, setValue] = useState("");
  const classes = useStyles();
  const [filteredSearch, FillSearch] = useState("");
  const types = [
    "Release Date (Oldest first)",
    "Release Date (Newest first)",
    "Price (Lowest-Highest)",
    "Price (Highest-Lowest)",
    "Artist(A-Z)",
    "Artist(Z-A)",
  ];
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      ).then((data) =>
        data.json().then((items) => {
          return SET_LIST(items.feed.entry);
        })
      );
    };
    fetchData();
  }, []);

  let filteredTracks = LIST.filter((track) => {
    return (
      track["im:name"].label
        .toLowerCase()
        .indexOf(filteredSearch.toLowerCase()) !== -1
    );
  });

  const handleChange = (event) => {
    let i = event.target.value;
    setValue(i);
    console.log(value, types[0]);
    switch (i) {
      case types[0]:
        SET_LIST(SortDate_OldFirst(LIST));
        break;
      case types[1]:
        SET_LIST(SortDate_NewFirst(LIST));
        break;
      case types[2]:
        SET_LIST(SortByPrice_LH(LIST));
        break;
      case types[3]:
        SET_LIST(SortByPrice_HL(LIST));
        break;
      case types[4]:
        SET_LIST(SortByArtist_AZ(LIST));
        break;
      case types[5]:
        SET_LIST(SortByArtist_ZA(LIST));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Header />
      {LIST.length > 0 ? (
        <>
          {console.log("filteredTracks", filteredTracks[0])}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search title…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => FillSearch(e.target.value)}
            />
          </div>
          <FormControl variant="filled" className={classes.formControl}>
            <label className="placeholder"></label>
            <InputLabel id="demo-simple-select-helper-label">
              Sort By
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={value}
              onChange={(e) => handleChange(e)}
            >
              {types.map((sortType, index) => {
                return <MenuItem value={sortType}>{sortType}</MenuItem>;
              })}
            </Select>
          </FormControl>

          {filteredTracks.map((track, index) => {
            return <ListCard track={track} key={index} />;
          })}
        </>
      ) : (
        <>
          <div>Loading list..</div>
        </>
      )}
    </>
  );
}

export default Home;
