import classes from "./MovieTitle.module.css"

export default function Movies() {
    return (
        <div className={classes.movie}>
            <h1>Movies</h1>
            <p>Movies move us like nothing else can, whether they're scary, funny
                dramatic, romantic or anywhere in-between. So many titles, so much 
                to experience.</p>
        </div>
    )
}