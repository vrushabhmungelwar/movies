import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "./global-constants";

export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  // const movie = movies[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);
  // console.log(movie);
  const styles = {
    color: movie.rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
    <div>
      <iframe
        width="942"
        height="530"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h1 className="movie-name">{movie.name}</h1>
          <p className="movie-rating" style={styles}>
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
