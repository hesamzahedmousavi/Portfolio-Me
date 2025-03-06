import { lazy, Suspense, useState } from "react";

const About = lazy(() => import("../components/About/About"));
const Experience = lazy(() => import("../components/Experience/Experience"));
const Education = lazy(() => import("../components/Education/Education"));
const Skills = lazy(() => import("../components/Skills/Skills"));

function Resume() {
  const [isActive, setIsActive] = useState("About");

  const handleActive = (content) => {
    setIsActive(content);
  };

  const renderContent = () => {
    switch (isActive) {
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Skills":
        return <Skills />;
      default:
        return (
          <div className="container mx-auto text-white font-Lexend font-bold text-9xl">
            Not Found !!
          </div>
        );
    }
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <section className="container mx-auto flex flex-col px-12 mt-10">
        {/* button */}
        <div className="flex items-center justify-between">
          <div
            onClick={() => handleActive("About")}
            className={`layout--btn-resume ${
              isActive === "About" ? "btn-resume--active" : ""
            }`}
          >
            <button className="btn-resume">About me</button>
          </div>
          <div
            onClick={() => handleActive("Experience")}
            className={`layout--btn-resume ${
              isActive === "Experience" ? "btn-resume--active" : ""
            }`}
          >
            <button className="btn-resume">Exprience</button>
          </div>
          <div
            onClick={() => handleActive("Education")}
            className={`layout--btn-resume ${
              isActive === "Education" ? "btn-resume--active" : ""
            }`}
          >
            <button className="btn-resume">Education</button>
          </div>
          <div
            onClick={() => handleActive("Skills")}
            className={`layout--btn-resume ${
              isActive === "Skills" ? "btn-resume--active" : ""
            }`}
          >
            <button className="btn-resume">Skills</button>
          </div>
        </div>
        {/* content */}
        <div>{renderContent()}</div>
      </section>
    </Suspense>
  );
}
export default Resume;
