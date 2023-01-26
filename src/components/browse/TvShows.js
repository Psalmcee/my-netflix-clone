import classes from "./MovieItemStyles.module.css"

export default function TvShows({props}) {
    return (
        <div className={classes.container}>
            <img src={"https://image.tmdb.org/t/p/w500" + props.backdrop_path} alt={props.path} />
            <p>{props.name}</p>           
        </div>
    )
}



