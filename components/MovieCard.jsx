//Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

//ícones
import TheatersIcon from "@mui/icons-material/Theaters";

//Dados para exibir no card:
const Title = "Rush";
const Year = "2013";
const Type = "movie";
const imdbID = "tt1979320";
const Poster =
  "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg";

const CardWithBackgroundImage = styled("Box")({
  ".parent": {
    width: "100%",
    //margin: "10px",
    height: "400px",
    //border: "2px solid #2c2c2c",
    overflow: "hidden",
    position: "relative",
    //float: "left",
    display: "inline-block",
    cursor: "pointer",
    borderRadius: "4px",
  },

  ".child": {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "-webkit-transition": "all .5s",
    "-moz-transition": "all .5s",
    "-o-transition": "all .5s",
    transition: "all .5s",
    backgroundImage: `url(${Poster})`,
  },

  a: {
    display: "none",
    fontSize: "35px",
    color: "#ffffff !important",
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "50px",
    cursor: "pointer",
  },

  ".parent:hover .child, .parent:focus .child": {
    "-ms-transform": "scale(1.2)",
    "-moz-transform": "scale(1.2)",
    "-webkit-transform": "scale(1.2)",
    "-o-transform": "scale(1.2)",
    transform: "scale(1.2)",
  },

  ".parent:hover .child:before, .parent:focus .child:before": {
    display: "block",
  },

  ".parent:hover a, .parent:focus a": {
    display: "block",
  },

  ".child:before": {
    content: '""',
    display: "none",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000000be",
  },
});

export default function MovieCard(props) {
  return (
    <CardWithBackgroundImage>
      <div className="parent">
        <div className="child">
          <a href="#">{Title}</a>
        </div>
      </div>
    </CardWithBackgroundImage>
  );
}

{
  /* <div class="parent" onclick="">
    <div class="child bg-one">
      <a href="#">Los Angeles</a>
    </div>
  </div> */
}
