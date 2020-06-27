export function SortDate_OldFirst(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (
      new Date(a["im:releaseDate"].attributes.label) >
      new Date(b["im:releaseDate"].attributes.label)
    ) {
      return 1;
    } else if (
      new Date(a["im:releaseDate"].attributes.label) <
      new Date(b["im:releaseDate"].attributes.label)
    ) {
      return -1;
    } else return 0;
  });
  return BIG_LIST;
}

export function SortDate_NewFirst(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (
      new Date(a["im:releaseDate"].attributes.label) >
      new Date(b["im:releaseDate"].attributes.label)
    ) {
      return 1;
    } else if (
      new Date(a["im:releaseDate"].attributes.label) <
      new Date(b["im:releaseDate"].attributes.label)
    ) {
      return -1;
    } else return 0;
  });
  return BIG_LIST.reverse();
}

export function SortByPrice_LH(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (
      parseFloat(String(a["im:price"].label).replace("$", "")) >
      parseFloat(String(b["im:price"].label).replace("$", ""))
    ) {
      return 1;
    } else if (
      parseFloat(String(a["im:price"].label).replace("$", "")) <
      parseFloat(String(b["im:price"].label).replace("$", ""))
    ) {
      return -1;
    } else return 0;
  });
  return BIG_LIST;
}

export function SortByPrice_HL(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (
      parseFloat(String(a["im:price"].label).replace("$", "")) >
      parseFloat(String(b["im:price"].label).replace("$", ""))
    ) {
      return 1;
    } else if (
      parseFloat(String(a["im:price"].label).replace("$", "")) <
      parseFloat(String(b["im:price"].label).replace("$", ""))
    ) {
      return -1;
    } else return 0;
  });
  return BIG_LIST.reverse();
}

export function SortByArtist_AZ(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (String(a["im:artist"].label) > String(b["im:artist"].label)) {
      return 1;
    } else if (String(a["im:artist"].label) < String(b["im:artist"].label)) {
      return -1;
    } else return 0;
  });
  return BIG_LIST;
}

export function SortByArtist_ZA(list) {
  let BIG_LIST = list.sort((a, b) => {
    if (String(a["im:artist"].label) > String(b["im:artist"].label)) {
      return 1;
    } else if (String(a["im:artist"].label) < String(b["im:artist"].label)) {
      return -1;
    } else return 0;
  });
  return BIG_LIST.reverse();
}
