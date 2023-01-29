import MovieCard from "../ui/MovieCard"
import classes from "./MovieItemStyles.module.css"

export default function TvShows({props}) {
    return (
        <div className={classes.container}>
            <MovieCard>
            <img src={"https://image.tmdb.org/t/p/w500" + props.backdrop_path} alt={props.path} />
            </MovieCard>
            <p>{props.name}</p>           
        </div>
    )
}



