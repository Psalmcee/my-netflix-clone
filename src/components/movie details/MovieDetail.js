import JoinNow from "../browse/more to watch/JoinNow";

export default function MovieDetail(props)  {
    return (
        <div>
            <img src="" />
            <h1>{props.movieName}</h1>
            <p>{props.movieYear} | <span>{props.rating}</span> | <span>{props.duration}</span> | <span> {props.genre}</span></p>
            <p>{props.about}</p>
            <p><span>Starring: </span> {props.cast}</p>
            <div><span>N logo</span>Watch all you want. <div><JoinNow /></div></div>
        </div>
    )
}