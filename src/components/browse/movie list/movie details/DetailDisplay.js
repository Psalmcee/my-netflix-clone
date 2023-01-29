import classes from "./DetailDisplay.module.css"
import Footer from "../../../footer/Footer";
import ComingSoon from "./ComingSoon";
import MoreDetails from "./MoreDetails";
import MoreLikeThis from "./MoreLikeThis";
import MovieDetail from "./MovieDetail";
import Navbar from "../../navbar/Navbar"

export default function DetailDisplay() {
    return (
        <div className={classes.container}>
            <Navbar />
            <section className={classes.section}>
                <MovieDetail />
                <MoreDetails />
                <MoreLikeThis />
                <ComingSoon />
            </section>
            <footer><Footer className={"background:blue"}/></footer>
        </div>
    )
}