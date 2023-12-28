import { useRef } from "react";
import "./styles.css";

export default function App() {
  const sectionWrapperRef = useRef(null);
  const scroll = (e) => {
    const { value } = e.target;
    if (!sectionWrapperRef.current) {
      return;
    }
    const sections =
      sectionWrapperRef.current.querySelectorAll(".carousel-section");
    const buttons = document.querySelectorAll(".carousel-btn");
    sections.forEach((section) => {
      //scroll
      if (section.classList.contains(value)) {
        const scrollLeft =
          section.offsetLeft - sectionWrapperRef.current.offsetLeft;
        sectionWrapperRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });

        //make button active
        buttons.forEach((button) => {
          if (button.value === value) {
            button.setAttribute("data-active", true);
          } else {
            button.setAttribute("data-active", false);
          }
        });
      }
    });
  };
  return (
    <div className="App">
      <div className="carousel">
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            data-active="true"
            value="major"
            onClick={scroll}
          >
            Major
          </button>
          <button className="carousel-btn" value="minor" onClick={scroll}>
            Minor
          </button>
          <button className="carousel-btn" value="micro" onClick={scroll}>
            Micro
          </button>
        </div>
        <div className="carousel-section-wrapper" ref={sectionWrapperRef}>
          <div className="carousel-section major">
            <div className="dummy-material">Major</div>
          </div>
          <div className="carousel-section minor">
            <div className="dummy-material">Minor</div>
          </div>
          <div className="carousel-section micro">
            <div className="dummy-material">Micro</div>
          </div>
        </div>
      </div>
    </div>
  );
}
