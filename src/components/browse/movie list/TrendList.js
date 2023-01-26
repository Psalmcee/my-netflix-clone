import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import classes from "./movieContainer.module.css"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    export default function TrendList() {
        const [trends, setTrends] = useState([]);

        useEffect(() => {
          (async () => {
            const data = await fetch(
              "https://api.themoviedb.org/3/trending/all/day?api_key=deb7327394fba51a9c97c4031497c060",
              requestOptions
            );
            const movies = await data.json();
            setTrends(movies.results);
            console.log(movies);
          })();
        }, []);            
    

    return (
      <div className={classes.movieContainer}>
        <h2>Trending</h2>
        <div>
          {trends.map((trend) => {
            return <Link to="movie-details"><li><MovieItem key={trend.id} props={trend} /></li></Link>;
          })}
        </div>
      </div>
    );
}


