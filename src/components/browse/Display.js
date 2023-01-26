import Footer from "../footer/Footer"
import classes from "./Display.module.css"
import MoreTowatch from "./more to watch/MoreToWatch"
import MovieDisplay from "./MovieDisplay"
import MovieTitle from "./movies intro/MovieTitle"
import Navbar from "./navbar/Navbar"

export default function Display() {
    return (
        <div className={classes.display}>
            <Navbar />
           <MovieTitle /> 
           <MovieDisplay />
           <MoreTowatch />
           <Footer />
        </div>
    )
}