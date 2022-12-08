import classes from "./MovieCard.module.css"

export default function MovieCard(props) {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}