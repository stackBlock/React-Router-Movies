import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

function App() {
  const [savedList, setSavedList] = useState([]);

  function addToSavedList(movie) {
    savedList.push(movie);
    setSavedList({ savedList });
    console.log(savedList);
  }

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:id"
        // component={Movie} addToSavedList={this.addToSavedList}
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
      <div>Replace this Div with your Routes</div>
    </div>
  );
}

export default App;

// OLD CODE vvvvvv this is a test

// import React, { Component } from "react";
// import { Route } from "react-router-dom";
// import SavedList from "./Movies/SavedList";
// import MovieList from "./Movies/MovieList";
// import Movie from "./Movies/Movie";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       savedList: []
//     };
//   }

//   addToSavedList = movie => {
//     const savedList = this.state.savedList;
//     savedList.push(movie);
//     this.setState({ savedList });
//   };

//   render() {
//     return (
//       <div>
//         <SavedList list={this.state.savedList} />
//         <Route exact path="/" component={MovieList} />
//         <Route
//           exact
//           path="/movies/:id"
//           // component={Movie} addToSavedList={this.addToSavedList}
//           render={props => (
//             <Movie {...props} addToSavedList={this.addToSavedList} />
//           )}
//         />
//         <div>Replace this Div with your Routes</div>
//       </div>
//     );
//   }
// }
