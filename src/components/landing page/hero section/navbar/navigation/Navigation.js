import Language from "./Language";
import Login from "./Login";
import classes from "./Navigation.module.css"

export default function Navigation() {
    return (
        <div className={classes.display}>
            <div><Language /></div>
            <div><Login /></div>
        </div>
    )
}