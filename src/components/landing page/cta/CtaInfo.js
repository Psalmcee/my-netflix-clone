import classes from "./CtaInfo.module.css"

export default function CtaInfo(props) {
    return (
        <div className={classes.data}>
            <div>
                <h1>{props.header}</h1>
                <p>{props.description}</p>
            </div>
            <div>
                <img src={props.img} alt={props.img} />
            </div>
        </div>
    )
}


