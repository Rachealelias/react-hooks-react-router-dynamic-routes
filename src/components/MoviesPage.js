import React from "react";
// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
// import the MovieShow component
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  // useRouteMatch returns a special object with information about
  // the currently matched route
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      {/* adding code to show a message to the user to select a movie if they havent yet */}
      <Route exact path ={match.url}>
        <h3>Choose a movie from the list above</h3>
        </Route>
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <Route exact path={`${match.url}/:movieId`}>
        {/* adding the movies object as a prop to movieshow */}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;