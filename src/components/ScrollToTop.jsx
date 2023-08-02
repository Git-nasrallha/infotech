import React, { useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";


const ScrollToTop = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const topBtn = scrollRef.current;
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        if (topBtn) {
          topBtn.style.display = "block";
        }
      } else {
        if (topBtn) {
          topBtn.style.display = "none";
        }
      }
    });
  });
  // scroll to top
  const goToTop = () => {
    window.scrollTo(0,0);
  };

  return (
    <div
      className="scroll-top"
      ref={scrollRef}
      onClick={goToTop}
    >
      <FaArrowAltCircleUp />
    </div>
  );
};

export default ScrollToTop;
