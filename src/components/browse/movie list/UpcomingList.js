import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import classes from "./movieListContainer.module.css"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    export default function UpcomingList() {
        const [upcoming, setUpcoming] = useState([]);

        useEffect(() => {
          (async () => {
            const data = await fetch(
              "https://api.themoviedb.org/3/movie/upcoming?api_key=deb7327394fba51a9c97c4031497c060",
              requestOptions
            );
            const movies = await data.json();
            setUpcoming(movies.results);
            console.log(movies);
          })();
        }, []);            
    

    return (
      <div className={classes.movieContainer}>
        <h2>Upcoming</h2>
        <div>
          {upcoming.map((upcoming) => {
            return <Link to="movie-details"><li key={upcoming.id}><MovieItem key={upcoming.id} props={upcoming} /></li></Link>;
          })}
        </div>
      </div>
    );
}


