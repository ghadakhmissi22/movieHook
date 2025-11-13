import MovieCard from "./MovieCard";

//en mettant les movies comme paramètres je les recoits du app.js
const MovieList = ({ movies, searchTitle, searchRate }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "3% ",
        }}
      >
        {movies
          //pour filtrer
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(searchTitle.toUpperCase()) &&
              movie.rate >= searchRate
          )

          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default MovieList;
