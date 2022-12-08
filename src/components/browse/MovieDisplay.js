import ActionAdventure from "./genres/ActionAdventure";
import ActionMovies from "./genres/ActionMovies";
import Blockbuster from "./genres/Blockbuster";
import Comedies from "./genres/Comedies";
import CriticallyAcclaimed from "./genres/CriticallyAcclaimed";
import Dramas from "./genres/Dramas";
import DramasBoB from "./genres/DramasBoB";
import ExcitingMovies from "./genres/ExcitingMovies";
import FamilyWTM from "./genres/FamilyWTM";
import HollywoodMovies from "./genres/HollywoodMovies";
import NewReleases from "./genres/NewReleases";
import Popular from "./genres/Popular";
import PrevReleased from "./genres/PrevReleased";
import WomenWhoRTS from "./genres/WomenWhoRTS";
import classes from "./MovieDisplay.module.css"


export default function MovieDisplay() {
    return (
        <div className={classes.container}>
            <PrevReleased />
            <Popular />
            <NewReleases />
            <ExcitingMovies />
            <DramasBoB />
            <Comedies />
            <ActionAdventure />
            <HollywoodMovies />
            <Blockbuster />
            <Dramas />
            <ActionMovies />
            <CriticallyAcclaimed />
            <WomenWhoRTS />
            <FamilyWTM />
        </div>
    )
}