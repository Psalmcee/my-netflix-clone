import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import classes from "./movieContainer.module.css"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    export default function TopRated() {
        const [topRated, setTopRated] = useState([]);

        useEffect(() => {
          (async () => {
            const data = await fetch(
              "https://api.themoviedb.org/3/movie/top_rated?api_key=deb7327394fba51a9c97c4031497c060",
              requestOptions
            );
            const movies = await data.json();
            setTopRated(movies.results);
            console.log(movies);
          })();
        }, []);            
    

    return (
      <div className={classes.movieContainer}>
        <h2>Top Rated</h2>
        <div>
          {topRated.map((rated) => {
            return <Link to="movie-details"><li><MovieItem key={rated.id} props={rated} /></li></Link>;
          })}
        </div>
      </div>
    );
}


