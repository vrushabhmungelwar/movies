import { useState } from "react";
import { Counter } from "./Counter.js";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardActions, CardContent } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

export function Movie({
  name,
  poster,
  rating,
  summary,
  id,
  deleteButton,
  editButton,
}) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <IconButton
              onClick={() => {
                console.log(id);
                history.push("/movies/" + id);
              }}
              className="movie-show-button"
              aria-label="hide"
              color="primary"
            >
              <InfoIcon />
            </IconButton>

            <IconButton
              onClick={() => setShow(!show)}
              className="movie-show-button"
              aria-label="hide"
              color="primary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>

          <p className="movie-Rating" style={styles}>
            ⭐{rating}
          </p>
        </div>

        {/* <button >{show ? "Hide" : "Show"} Description</button> */}
        {/* {show ? <p className="movie-sumary">{summary}</p> : ""} */}
        <p className="movie-summary" style={summaryStyles}>
          {summary}
        </p>
        <CardActions>
          <Counter /> {deleteButton}
          {editButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}










// import React, { useState } from 'react';
// import './style.css';

// const Parent = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       {`${value} times clicked`}
//       <br />
//       <br />
//       <Child value={value} setValue = {setValue} />
//     </div>
//   );
// };

// const Child = ({value , setValue}) => {
//   return (<button onClick = {()=> {
//     setValue(value+1)}
//   }>Click</button>);
// };

// export default Parent;