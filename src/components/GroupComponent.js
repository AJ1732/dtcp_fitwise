import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  rEGISTER,
  group17379,
  showGroupIcon,
  propWidth,
  propWidth1,
  propPadding,
  propWidth2,
  propHeight,
  propWidth3,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const submitButtonShapeStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth2,
    };
  }, [propPadding, propWidth2]);

  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth3,
    };
  }, [propHeight, propWidth3]);

  return (
    <div className="submit-button-shape-wrapper" style={groupDivStyle}>
      <div className="submit-button-shape" style={submitButtonShapeStyle}>
        <button className="register-parent" style={frameButtonStyle}>
          <div className="register">{rEGISTER}</div>
          {showGroupIcon && (
            <img
              className="frame-child"
              alt=""
              src={group17379}
              style={groupIconStyle}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default GroupComponent;
