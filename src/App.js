import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import  movieData  from "./moviesData"; //export 
import AddMovie from "./components/addMovie/AddMovie";
import FilterByTitle from "./components/FilterByTitle";
import FilterByRate from './components/Rating'
function App() {
  // console.log(moviesData)
  const [movies, setmovies] = useState(movieData);
  //state que je récupère du composant FilterByTitle
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);
  // console.log('movies:',movies)
  //fonction pour rajouter un film en fin du tableau
  const movieAdd = (newMovie) => {
    setmovies([...movies, newMovie]);
  };
  // console.log(searchTitle);
  return (
    <div className="App">
      <h1>MovieList</h1>
      <FilterByTitle
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
      />
      <FilterByRate
        searchRate={searchRate}
        setSearchRate={setSearchRate}
        isRating={false}
      />
      <AddMovie movieAdd={movieAdd} />
      <MovieList
        movies={movies}
        searchTitle={searchTitle}
        searchRate={searchRate}
      />
    </div>
  );
}

export default App;
