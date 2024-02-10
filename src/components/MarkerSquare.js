import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import "./MarkerSquare.css";

const MarkerSquare = () => {
  const onABOUTTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpingYouFeel']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEXPERIENCESTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='moreFulfillingLifetime']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBLOGTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='diveDeeperWith']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="marker-square">
      <div className="button-shape-rectangle">
        <img
          className="button-shape-rectangle-child"
          alt=""
          src="/group-17387.svg"
        />
        <div className="label-menu-item-text">
          <nav className="separator-line-text">
            <div className="blog-article-frame">
              <div className="frame-vintage-shop">
                <div className="home">HOME</div>
                <div className="frame-pet-products">
                  <div className="frame-contact-us-name-hilton-s" />
                </div>
              </div>
              <div className="about" onClick={onABOUTTextClick}>
                ABOUT
              </div>
              <div className="experiences" onClick={onEXPERIENCESTextClick}>
                EXPERIENCES
              </div>
              <div className="blog" onClick={onBLOGTextClick}>
                BLOG
              </div>
            </div>
            <h3 className="fitwise">fitwise</h3>
            <GroupComponent
              rEGISTER="REGISTER"
              group17379="/group-17379@2x.png"
              showGroupIcon
            />
            <GroupComponent
              rEGISTER="LOGIN"
              group17379="/group-173791@2x.png"
              showGroupIcon={false}
              propWidth="120px"
              propWidth1="29px"
              propPadding="var(--padding-xs) var(--padding-xs) var(--padding-smi)"
              propWidth2="146px"
              propHeight="8px"
              propWidth3="8px"
            />
          </nav>
        </div>
        <img
          className="button-shape-rectangle-item"
          loading="eager"
          alt=""
          src="/group-17419.svg"
        />
        <div className="balance-diet-frame">
          <div className="frame-positive-thinking">
            <div className="ancient-practice-frame">
              <div className="expert-coaching-session-frame">
                <h1 className="improve-your-overall">
                  Improve your overall physical and mental wellbeing
                </h1>
                <div className="get-periodic-wellness">
                  Get periodic wellness routines, meditation sessions and daily
                  health tips to help you stay fit
                </div>
              </div>
              <div className="frame-training">
                <div className="rectangle-vitamins">
                  <div className="instagram">Instagram</div>
                  <div className="twitter">Twitter</div>
                </div>
              </div>
            </div>
            <div className="nutrition-weight-loss-frame">
              <div className="lets-talk-frame">
                <button className="rectangle-parent">
                  <div className="frame-item" />
                  <div className="get-started">Get Started</div>
                  <img
                    className="frame-inner"
                    alt=""
                    src="/group-17379-1@2x.png"
                  />
                </button>
              </div>
              <div className="facebook">Facebook</div>
            </div>
          </div>
        </div>
        <div className="frame-title">
          <img
            className="frame-title-child"
            loading="eager"
            alt=""
            src="/group-17379-2.svg"
          />
        </div>
      </div>
      <div className="title-tag-text">
        <div className="wrapper-rectangle-10-parent">
          <div className="wrapper-rectangle-10">
            <img
              className="wrapper-rectangle-10-child"
              loading="eager"
              alt=""
              src="/rectangle-10@2x.png"
            />
          </div>
          <h2 className="meditation-exercise">Meditation Exercise</h2>
        </div>
      </div>
      <div className="title-tag-text1">
        <div className="wrapper-rectangle-10-group">
          <div className="wrapper-rectangle-101">
            <img
              className="wrapper-rectangle-10-item"
              loading="eager"
              alt=""
              src="/rectangle-10-1@2x.png"
            />
          </div>
          <h2 className="get-a-coach">Get a Coach</h2>
        </div>
      </div>
      <div className="title-tag-text2">
        <div className="wrapper-rectangle-10-container">
          <div className="wrapper-rectangle-102">
            <img
              className="wrapper-rectangle-10-inner"
              loading="eager"
              alt=""
              src="/rectangle-10-2@2x.png"
            />
          </div>
          <h2 className="health-tips">Health Tips</h2>
        </div>
      </div>
    </div>
  );
};

export default MarkerSquare;
