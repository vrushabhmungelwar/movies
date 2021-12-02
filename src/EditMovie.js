import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams,useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { formValidationSchema } from "./AddMovie";

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
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
  useFormik({
    initialValues: {
      name:movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    // validate: validateForm,
    validationSchema: formValidationSchema,
    onSubmit: (updatedMovie) => {
      console.log("onSubmit", updatedMovie);
      editMovie(updatedMovie);
    },
  });

  const history = useHistory();
  const editMovie = (updatedMovie) => {
    // const updatedMovie = 
    // {
    //   name,
    //   poster,
    //   rating,
    //   summary,
    //   trailer,
    // };
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
    <form onSubmit={handleSubmit} className="add-movie-form">
            <TextField
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Name"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard"
      />

      <TextField
        id="poster"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Poster"
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster && errors.poster}
        variant="standard"
      />
      
      <TextField
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Rating"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}
        variant="standard"
      />
   
      <TextField
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Summary"
        error={errors.summary && touched.summary}
        helperText= {errors.summary && touched.summary && errors.summary}
        variant="standard"
      />
     
      <TextField
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Trailer"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}
        variant="standard"
      />
      <Button type="submit" color="success" variant="outlined">
        Save
      </Button>
    </form>
  );
}
