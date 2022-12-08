import Footer from "../footer/Footer";
import Header from "../landing page/hero section/navbar/navigation/Header";
import ComingSoon from "./ComingSoon";
import MoreDetails from "./MoreDetails";
import MoreLikeThis from "./MoreLikeThis";
import MovieDetail from "./MovieDetail";

export default function DetailDisplay() {
    return (
        <div>
            <Header />
            <MovieDetail />
            <MoreDetails />
            <MoreLikeThis />
            <ComingSoon />
            <Footer />
        </div>
    )
}