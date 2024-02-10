import "./RectangleBackground.css";

const RectangleBackground = () => {
  return (
    <div className="rectangle-background">
      <div className="text-content">
        <div className="frame-body">
          <h1 className="helping-you-feel" data-scroll-to="helpingYouFeel">
            Helping you feel better
          </h1>
          <div className="case-study-frame">
            <div className="we-empower-you">
              We empower you to prioritize your well-being with personalized
              routines, expert-led meditations, and daily health tips
            </div>
            <div className="case-study-content">
              <div className="rectangle-meditation">
                <div className="see-all">See all</div>
                <img
                  className="rectangle-meditation-child"
                  loading="eager"
                  alt=""
                  src="/group-17379-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-blog">
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="rectangle-eating">
              <h3 className="wellness-routines">Wellness Routines</h3>
              <div className="feeling-stuck-our">
                Feeling stuck? Our customizable wellness routines is here for
                you.
              </div>
            </div>
            <img
              className="healthcare-icon"
              loading="eager"
              alt=""
              src="/healthcare@2x.png"
            />
          </div>
          <div className="rectangle-container">
            <div className="frame-child1" />
            <div className="meditation-session-wrapper">
              <h3 className="meditation-session">Meditation Session</h3>
            </div>
            <div className="discover-inner-peace">
              Discover inner peace with our diverse meditation sessions
            </div>
          </div>
          <div className="group-div">
            <div className="frame-child2" />
            <div className="on-demand-help-wrapper">
              <h3 className="on-demand-help">On-demand Help</h3>
            </div>
            <div className="our-friendly-coach">
              Our friendly coach is always here to support your journey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleBackground;
