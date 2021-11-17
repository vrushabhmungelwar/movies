// import { Delete } from "@mui/icons-material";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
// import Delete from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("https://6193e5f00b39a70017b15648.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`https://6193e5f00b39a70017b15648.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id }) => (
        <Movie
          key={id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={id}
          deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={
                () => deleteMovie(id)
                // const deleteIdx = index;
                // const remainingMovies = movies.filter(
                //   (mv, idx) => idx !== deleteIdx
                // );
                // setMovies(remainingMovies);
              }
              className="movie-show-button"
              aria-label="delete movie"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              // style={{ marginLeft: "auto" }}
              onClick={() => history.push("/movies/edit/" + id)}
              className=""
              color="secondary"
              aria-label="edit movie"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
