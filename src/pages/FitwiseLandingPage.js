import MarkerSquare from "../components/MarkerSquare";
import RectangleBackground from "../components/RectangleBackground";
import Rectangle from "../components/Rectangle";
import MeetFitwisePlatform from "../components/MeetFitwisePlatform";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./FitwiseLandingPage.css";

const FitwiseLandingPage = () => {
  return (
    <div className="fitwise-landing-page">
      <section className="closer-lifestyle-landing-page">
        <div className="closer-lifestyle-landing-page-child" />
        <MarkerSquare />
        <RectangleBackground />
      </section>
      <div className="sneak-peek-btn">
        <div className="platform-name">
          <div className="wrapper-parent-meditation">
            <img
              className="parent-meditation-icon"
              loading="eager"
              alt=""
              src="/rectangle-10-3@2x.png"
            />
          </div>
          <h2 className="art-music">{`Art & Music`}</h2>
        </div>
      </div>
      <Rectangle />
      <div className="fitwise-landing-page-child" />
      <div className="read-more">Read more</div>
      <MeetFitwisePlatform />
      <div className="fitwise-landing-page-item" />
      <div className="learn-more">Learn more</div>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default FitwiseLandingPage;
