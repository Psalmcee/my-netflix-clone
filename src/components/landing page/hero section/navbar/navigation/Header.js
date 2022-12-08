import logo from "../../../../images/logo.png"
import { Link } from "react-router-dom"
import classes from "./Header.module.css"


export default function Header() {
    return (
        <div>
            <Link to="/" ><img src={logo} alt="logo" className={classes.title}/></Link>
        </div>
    )
}