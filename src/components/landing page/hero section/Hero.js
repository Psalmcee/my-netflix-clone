import Navbar from "./navbar/Navbar";
import HeroLoremIpsum from "./hero article/HeroLoremIpsum";
import classes from "./Hero.module.css"
import CtaItems from "../cta/CtaItems";
import FAQ from "../FAQ/FAQ";
import Footer from "../../footer/Footer";

export default function Hero() {
    return (
        <div className={classes.container}>
            <div className={classes.heroSection}>
               <Navbar />
               <HeroLoremIpsum /> 
            </div>
            <div className={classes.bodySection}>
                <CtaItems />
                <FAQ />
                <Footer />
            </div>
            
        </div>
    )
}