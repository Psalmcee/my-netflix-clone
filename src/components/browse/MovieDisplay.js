import classes from "./MovieDisplay.module.css"
import TrendList from "./movie list/TrendList";
import DramaList from "./movie list/DramaList";
import TopRated from "./movie list/TopRated";
import UpcomingList from "./movie list/UpcomingList";
import PopularList from "./movie list/PopularList";


export default function MovieDisplay() {
    return (
        <div className={classes.container}>
            <PopularList />
            <TrendList />
            <TopRated />
            <DramaList />
            <UpcomingList />
        </div>
    )
}
