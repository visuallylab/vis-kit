const padding = 0
const margin = 20

export const Size: any = {
  s: {
    height: "calc(20vh - 40px)",
    width: "calc(25% - 40px)",
    margin,
    padding,
    minWidth: "120px",
    display: "inline-block",
    boxSizing: "border-box"
  },
  m: {
    height: "calc(30vh - 40px)",
    width: "calc(33% - 40px)",
    margin,
    padding,
    minWidth: "300px",
    display: "inline-block",
    boxSizing: "border-box"
  },
  l: {
    height: "calc(50vh - 40px)",
    width: "calc(80% - 40px)",
    margin,
    padding,
    minWidth: "300px",
    display: "inline-block",
    boxSizing: "border-box"
  },
  row: {
    height: "calc((50vh - 160px)/ 3)",
    margin,
    padding,
    minWidth: "300px",
    display: "inline-block",
    boxSizing: "border-box"
  }
}

export const titleStyle: any = {
  s: {fontSize: "12px"},
  m: {fontSize: "20px"},
  l: {fontSize: "40px"},
  row: {fontSize: "12px"}
}

export const subtitleStyle: any = {
  s: {fontSize: "12px"},
  m: {fontSize: "12px"},
  l: {fontSize: "20px"},
  row: {fontSize: "12px"}
}

export const indicatorStyle: any = {
  s: {fontSize: "12px"},
  m: {fontSize: "12px"},
  l: {fontSize: "20px"},
  row: {fontSize: "12px"}
}