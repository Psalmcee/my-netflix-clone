import Membership from "../todo actions/Membership";
import classes from "./FAQ.module.css"


export default function FAQ() {
    return (
      <div className={classes.container}>
        <h1>Frequently Asked Questions </h1>
        <div>
          <div className={classes.divContainer}>
            <div className={classes.justifyContent}>
              <div>What is Netflix?</div>
              <div className={classes.hamburger}>+</div>
            </div>
            <div className={classes.faqAns}>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. <br />
              You can watch as much as you want, whenever you want without a
              single commercial - all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </div>
          </div>
          <div className={classes.divContainer}>
            <div>How much does Netflix cost?</div>
            <div className={classes.faqAns}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
            </div>
          </div>
          <div className={classes.divContainer}>
            <div>Where can I watch?</div>
            <div className={classes.faqAns}>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </div>
          </div>
          <div className={classes.divContainer}>
            <div>How do I cancel?</div>
            <div className={classes.faqAns}>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees-start or stop your account
              anytime.
            </div>
          </div>
          <div className={classes.divContainer}>
            <div>What can I watch on Netflix?</div>
            <div className={classes.faqAns}>
              Netlfix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </div>
          <div className={classes.divContainer}>
            <div>Is Netflix good for kids?</div>
            <div className={classes.faqAns}>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don't want kids to see.
            </div>
          </div>
        </div>
        <div><Membership /></div>
      </div>
    );
}