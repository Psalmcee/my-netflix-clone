
import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
import Header from "./navigation/Header"
import Navigation from "./navigation/Navigation"

export default function Navbar() {
    return (
        <div className={classes.nav}>
                <Link to="/"><Header /></Link>
                <Navigation />
        </div>
    )
}
