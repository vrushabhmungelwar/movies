// import { Delete } from "@mui/icons-material";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }, index) => (
        <Movie
          key={index}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={index}
          deleteButton={
            <IconButton
              // style={{ marginLeft: "auto" }}
              onClick={() => {
                const deleteIdx = index;
                const remainingMovies = movies.filter(
                  (mv, idx) => idx !== deleteIdx
                );
                setMovies(remainingMovies);
              }}
              className="movie-show-button"
              aria-label="delete movie"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("/movies/edit/" + index)}
              className=""
              color="secondary"
              aria-label="edit movie"
            >
              <EditIcon></EditIcon>
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
