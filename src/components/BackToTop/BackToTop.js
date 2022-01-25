import React, { useState, useEffect } from "react";
import "./BackToTop.css";
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="back-top-container">
          Back To Top
        </div>
      )}
    </div>
  );
}

export default BackToTop;
