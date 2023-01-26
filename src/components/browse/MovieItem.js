import MovieCard from "../ui/MovieCard"
import classes from "./MovieItemStyles.module.css"

export default function MovieItem({props}) {
    return (
        <div className={classes.container}>
            <MovieCard>
                <img src={"https://image.tmdb.org/t/p/w500" + props.backdrop_path} alt={props.path} />
            </MovieCard>
            <p className={classes.title}>{props.title}</p>
            
        </div>
    )
}