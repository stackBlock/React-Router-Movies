import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => setMovies(response.data))
      .catch(error => {
        console.error("Server Error", error);
      });
  });

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;

// OLD CODE vvvvvvvvvvvvvvv

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import MovieCard from "./MovieCard";
// import axios from "axios";

// export default class MovieList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/movies")
//       .then(response => {
//         this.setState(() => ({ movies: response.data }));
//       })
//       .catch(error => {
//         console.error("Server Error", error);
//       });
//   }

//   render() {
//     return (
//       <div className="movie-list">
//         {this.state.movies.map(movie => (
//           <Link to={`/movies/${movie.id}`}>
//             <MovieCard key={movie.id} movie={movie} />
//           </Link>
//         ))}
//       </div>
//     );
//   }
// }
