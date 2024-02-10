import { useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const onBlogTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='diveDeeperWith']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTestimonialsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='moreFulfillingLifetime']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpingYouFeel']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="fitwise-platform-wrapper">
      <div className="fitwise-platform">
        <div className="welcome-frame">
          <div className="lets-talk-parent">
            <h1 className="lets-talk1">Let's Talk!</h1>
            <div className="fitwise-logo">
              <h3 className="fitwise1">FITWISE</h3>
              <div className="hellofitwisecom-anywhere-ge-container">
                <p className="hellofitwisecom">hello@fitwise.com</p>
                <p className="anywhere-geo-planet">
                  Anywhere, GEO, Planet Earth
                </p>
                <p className="p">+12 456 3445 5678</p>
              </div>
            </div>
          </div>
          <div className="what-we-do-frame">
            <div className="news-heading">
              <h3 className="what-we-do">WHAT WE DO</h3>
              <div className="blog-frame">
                <div className="meditation-exercise1">Meditation Exercise</div>
                <div className="health-tips1">Health Tips</div>
                <div className="expert-coach">Expert Coach</div>
                <div className="goal-tracking1">Goal Tracking</div>
              </div>
            </div>
            <div className="news-heading1">
              <h3 className="news1">NEWS</h3>
              <div className="blog-parent">
                <div className="blog1" onClick={onBlogTextClick}>
                  Blog
                </div>
                <div className="testimonials" onClick={onTestimonialsTextClick}>
                  Testimonials
                </div>
                <div className="intro-video">Intro Video</div>
                <div className="sneak-peek">Sneak Peek</div>
              </div>
            </div>
          </div>
          <div className="fashion-text">
            <h3 className="fashion">FASHION</h3>
            <div className="about-us-parent">
              <div className="about-us" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="contact-us">Contact Us</div>
              <div className="careers">Careers</div>
              <div className="legal-privacy">{`Legal & Privacy`}</div>
            </div>
          </div>
        </div>
        <div className="about-us-contact-careers-legal">
          <img
            className="about-us-contact-careers-legal-child"
            loading="eager"
            alt=""
            src="/vector-241.svg"
          />
          <div className="frame-facebook-instagram-twitt">
            <div className="allrightsreservedby-fitwise">
              <img
                className="facebook-icon"
                loading="eager"
                alt=""
                src="/002facebook.svg"
              />
              <img
                className="instagram-icon"
                loading="eager"
                alt=""
                src="/003instagram.svg"
              />
              <img
                className="twitter-icon"
                loading="eager"
                alt=""
                src="/004twitter.svg"
              />
              <img
                className="linkedin-icon"
                loading="eager"
                alt=""
                src="/001linkedin.svg"
              />
            </div>
            <div className="all-rights-reserved">
              All rights reserved by © Fitwise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
