// import React, { Component } from "react";
// import MovieCard from "./MovieCard";
// import axios from "axios";

// export default class Movie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: null
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.fetchMovie(id);
//   }

//   fetchMovie = id => {
//     axios
//       .get(`http://localhost:5000/api/movies/${id}`)
//       .then(response => {
//         this.setState(() => ({ movie: response.data }));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   // Uncomment this code when you're ready for the stretch problems
//   componentWillReceiveProps(newProps) {
//     if (this.props.match.params.id !== newProps.match.params.id) {
//       this.fetchMovie(newProps.match.params.id);
//     }
//   }

//   saveMovie = () => {
//     console.log(this.props.addToSavedList);
//     const addToSavedList = this.props.addToSavedList;
//     addToSavedList(this.state.movie);
//   };

//   render() {
//     if (!this.state.movie) {
//       return <div>Loading movie information...</div>;
//     }

//     const { title, director, metascore, stars } = this.state.movie;
//     return (
//       <div className="save-wrapper">
//         <MovieCard movie={this.state.movie} />

//         <div className="save-button">
//           <button onClick={this.saveMovie}>Save</button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movie(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    fetchMovie(id);
  });

  function fetchMovie(id) {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => {
        console.error(error);
      });
  }

  function saveMovie() {
    console.log(props.addToSavedList);
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button">
        <button onClick={saveMovie}>Save</button>
      </div>
    </div>
  );
}

export default Movie;
