// import { Delete } from "@mui/icons-material";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
// import Delete from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { API_URL } from "./global-constants";



export function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id, _id }) => (
        <Movie
          key={_id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={_id}
          deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={
                () => deleteMovie(_id)
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
              onClick={() => history.push("/movies/edit/" + _id)}
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
