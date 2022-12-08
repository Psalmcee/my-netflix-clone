export default function MoreDetails(props) {
    return (
        <div>
            <div>
                <div>Watch offline</div>
                <div>{props.downloadable}</div>
            </div>
            <div>
                <div>Genres</div>
                <div>{props.genreCatgory}</div>
            </div>
            <div>
                <div>This movie is...</div>
                <div>{props.feeling}</div>
            </div>
            <div>
                <div>Audio</div>
                <div>{props.language}</div>
            </div>
            <div>
                <div>
                    <div>Subtitles</div>
                    <div>{props.subtitle}</div>
                </div>
            </div>
            <div>
                <div>
                    <div>Cast</div>
                    <div>{props.cast}</div>
                </div>
            </div>
        </div>
    )
}