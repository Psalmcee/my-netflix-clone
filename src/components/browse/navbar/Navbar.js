import Header from "../../landing page/hero section/navbar/navigation/Header";
import Login from "../../landing page/hero section/navbar/navigation/Login";
import classes from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={classes.nav}>
            <Header />
            <Login />
        </div>
    )
}