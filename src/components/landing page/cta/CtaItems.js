import CtaInfo from "./CtaInfo";
import {ctaArray} from "./CtaArray"
import classes from "./CtaItems.module.css"



export default function CtaItems() {
    return (        
            ctaArray.map((data, index) => {
            return (<ul className={classes.container} key={index}>
                        <li><CtaInfo 
                        img={data.image}
                        header={data.header}
                        description={data.description}
                        /></li>
            </ul>)})
        
    )
}

 