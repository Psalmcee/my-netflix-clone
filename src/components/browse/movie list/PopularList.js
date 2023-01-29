import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import classes from "./movieListContainer.module.css"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    export default function PopularList() {
        const [popular, setPopular] = useState([]);

        useEffect(() => {
          (async () => {
            const data = await fetch(
              "https://api.themoviedb.org/3/movie/popular?api_key=deb7327394fba51a9c97c4031497c060",
              requestOptions
            );
            const movies = await data.json();
            setPopular(movies.results);
            console.log(movies);
          })();
        }, []);            
    
    return (
      <div className={classes.movieContainer}>
        <h2>Popular</h2>
        <div>
          {popular.map((popular) => {
            return <Link to="movie-details"><li><MovieItem key={popular.id} props={popular} /></li></Link>  
            })}
        </div>
      </div>
    );
}


