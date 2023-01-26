import { useEffect,useState } from "react";
import JoinNow from "../../more to watch/JoinNow";
import AboutMovie from "../../../movie info/AboutMovie"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

export default function MovieDetail()  {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        (async () => {
            const getData = await fetch("https://api.themoviedb.org/3/movie/76600?api_key=deb7327394fba51a9c97c4031497c060&language=en-US",requestOptions);
            const result = await getData.json();
            setDetail(result);
            console.log(detail);
            console.log(result)
        })();
    },[])

    return (
        <div>
            {detail.map((item) => { 
                return <AboutMovie key={item.id} props={item} />
    })}
        </div>
    )
}