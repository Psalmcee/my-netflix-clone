import JoinNow from "../browse/more to watch/JoinNow"

export default function Component({props}) {
    return (
        <div>
            <img src="" alt=""/>
            <h1>{props.movieName}</h1>
            <p>{props.movieYear} | <span>{props.rating}</span> | <span>{props.duration}</span> | <span> {props.genres[0].name}</span></p>
            <p>{props.overview}</p>
            <p><span>Starring: </span> {props.cast}</p>
            <div><span>Netflix logo </span>Watch all you want. <div><JoinNow /></div></div>
        </div>
    )
}