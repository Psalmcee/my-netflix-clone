import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TvShows from "../TvShows";
import classes from "./movieListContainer.module.css"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    export default function DramaList() {
        const [drama, setDrama] = useState([]);

        useEffect(() => {
          (async () => {
            const data = await fetch(
            "https://api.themoviedb.org/3/tv/popular?api_key=deb7327394fba51a9c97c4031497c060",
              requestOptions
            );
            const movies = await data.json();
            setDrama(movies.results);
            console.log(movies);
          })();
        }, []);            
    

    return (
      <div className={classes.movieContainer}>
        <h2>Dramas</h2>
        <div>
          {drama.map((drama) => {
            return <Link to="movie-details"><li key={drama.id}><TvShows props={drama} /></li></Link>;
          })}
        </div>
      </div>
    );
}


