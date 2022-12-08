import Language from "../landing page/hero section/navbar/navigation/Language"
import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={classes.container}>
            <div>Questions? Contact us.</div>
            {/* /* footer cta */ }
            <div className={classes.cta}>
                <div>FAQ</div>
                <div>Help Center</div>
                <div>Account</div>
                <div>Media Center</div>
                <div>Investor Relations</div>
                <div>Jobs</div>
                <div>Ways to Watch</div>
                <div>Terms of Use</div>
                <div>Privacy</div>
                <div>Cookie Preferences</div>
                <div>Corporate Information</div>
                <div>Contact Us</div>
                <div>Speed Test</div>
                <div>Legal Notices</div>
                <div>Only on Netflix</div>
            </div>
            <Language />
        </div>
    )
}