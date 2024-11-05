import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate("/books");
  };

  return (
    <div>
      <div className="hero position-relative">
        <div className="position-absolute image1">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/book.png"
            alt=""
          />
        </div>
        <div className="position-absolute image2">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/bg-shape.png"
            alt=""
          />
        </div>
        <div className="position-absolute image3">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/frame-2.png"
            alt=""
          />
        </div>
        <div className="position-absolute image4">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/xstar.png"
            alt=""
          />
        </div>
        <div className="position-absolute image5">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/frame-shape.png"
            alt=""
          />
        </div>
        <div className="position-absolute image6">
          <img
            src="https://gramentheme.com/html/bookle/assets/img/hero/frame-2.png"
            alt=""
          />
        </div>
        <div className="paragraph">
          {/* Add typing animation here */}
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[
              `"Get Your New Book",\
              
          "New Stories Await You"`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              "",
            ]}
            speed={50} // Adjusts typing speed, can be customized
            repeat={Infinity}
          />
          <button
            className="btn btn-primary fw-bold fs-5 rounded-pill"
            style={{ width: "200px", padding: "15px", marginTop: "20px" }}
            onClick={handleViewClick}
          >
            View
            <FaArrowRightLong size={21} style={{ marginLeft: "15px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
