import ContactUsBlog from "./ContactUsBlog";
import "./MeetFitwisePlatform.css";

const MeetFitwisePlatform = () => {
  return (
    <section className="meet-fitwise-platform">
      <div className="lets-talk-frame1">
        <div className="f-i-t-w-i-s-e-i-n-t-r-o-r-e-c">
          <h1 className="dive-deeper-with" data-scroll-to="diveDeeperWith">
            Dive deeper with Fitwise Blog
          </h1>
          <div className="your-source-for">
            Your source for insightful articles, expert tips, and inspiring
            stories to fuel your well-being journe
          </div>
        </div>
        <div className="organic-pet-foods">
          <ContactUsBlog
            newsletterSponsoringConta="/rectangle-3480@2x.png"
            eatingABalancedDietToMain="Eating a balanced diet to maintain healthy lifestyle."
            thinkVibrantFruitsVeggies={`Think vibrant fruits & veggies, whole grains for sustained energy, and lean proteins for building strength`}
          />
          <ContactUsBlog
            newsletterSponsoringConta="/rectangle-3480-1@2x.png"
            eatingABalancedDietToMain="How meditation can help you achieve inner peace"
            thinkVibrantFruitsVeggies="This ancient practice isn't just about sitting still; it's a journey inward, cultivating calmness."
          />
          <ContactUsBlog
            newsletterSponsoringConta="/rectangle-3480-2@2x.png"
            eatingABalancedDietToMain="Getting the most from your expert coaching session"
            thinkVibrantFruitsVeggies="Your expert coaching session is a golden opportunity to accelerate your wellness journey."
          />
        </div>
        <div className="lets-talk-frame-inner">
          <div className="frame-parent3">
            <img
              className="frame-child10"
              loading="eager"
              alt=""
              src="/group-17379-1@2x.png"
            />
            <button className="read-more-articles-parent">
              <div className="read-more-articles">Read more articles</div>
              <img
                className="frame-child11"
                alt=""
                src="/group-17379-1@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFitwisePlatform;
