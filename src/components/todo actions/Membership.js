import { Link } from "react-router-dom"
import classes from "./Membership.module.css"

export default function Membership() {
    return (
        <div className={classes.card}>
            <Link to="/movies"><div>Restart Your Membership</div> </Link>
        </div>
    )
}