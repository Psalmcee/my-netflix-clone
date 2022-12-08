import JoinNow from "./JoinNow"
import classes from "./MoreToWatch.module.css"

export default function MoreTowatch() {
    return (
        <div className={classes.container}>
            <div className={classes.text}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflic originals and more. Watch as much as you want, anytime you want. </div>
            <JoinNow />
        </div>
    )
}