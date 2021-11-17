import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams,useHistory } from "react-router-dom";

export function EditMovie() {
  // const history = useHistory();
  const { id } = useParams();
  // const movie = movies[id];

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://6193e5f00b39a70017b15648.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // console.log(updatedMovie);
    // const copyMovieList = [...movies];
    // copyMovieList[id] = updatedMovie;
    // setMovies(copyMovieList);
    // history.push("/movies");
    fetch(`https://6193e5f00b39a70017b15648.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="standard"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="standard"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="standard"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="standard"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="standard"
      />
      <Button onClick={editMovie} variant="outlined">
        Save
      </Button>
    </div>
  );
}
