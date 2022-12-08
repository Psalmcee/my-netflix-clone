
import { Link } from "react-router-dom"
import Membership from "../../todo actions/Membership"
import classes from "./HeroLoremIpsum.module.css"

export default function HeroLoremIpsum() {
    return (
        <div className={classes.hero}>
            <p>Welcome back, Samuel!</p>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere, Cancel anytime.</h3>
            <Membership />
        </div>
    )
}