import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaGithub, FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const contentView = [
  {
    id: 1,
    title: "Rick and Morty",
    description:
      "Built an interactive web app usingHTML, CSS, JavaScript, React, and Redux, seamlessly integratingthe Rick and Morty API for a smooth user experienceWorked closely with designers and developers,optimizing state management and API performancewhile ensuring a responsive and engaging UI. 🚀",
    tags: ["HTML", "CSS", "Tailwindcss", "JavaScript", "React"],
    picture: "/public/images/ProjectPicture.png",
    viewLink: "",
    githubLink:
      "https://github.com/hesamzahedmousavi/Rick-and-Morty-API-with-React.js",
  },
  {
    id: 2,
    title: "Booking Hotel App",
    description:
      "Developed a dynamic and user-friendly hotel booking web app using HTML, CSS, JavaScript, and React, ensuring a seamless reservation experience.Implemented a responsive and intuitive UI, ensuring a smooth experience across all devices.Connected the frontend to a RESTful API, handling authentication, payments, and user data securely.Optimized API requests and performance for faster loading times and a frictionless booking process. 🚀",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    picture: "/public/images/picHotelApp.png",
    viewLink: "",
    githubLink: "https://github.com/hesamzahedmousavi/Booking-Hotel-App",
  },
];

export default function Work() {
  const [itemId, setItemId] = useState(1);

  const handleNextItem = () => {
    setItemId((prev) => (prev === contentView.length ? 1 : prev + 1));
  };

  const handlePrevItem = () => {
    setItemId((prev) => (prev === 1 ? contentView.length : prev - 1));
  };

  const activeItem = contentView[itemId - 1] || {};
  return (
    <div className="container mx-auto mt-30 min-h-screen px-12">
      <div className="flex justify-between">
        {/* left side */}
        <LeftSide activeItem={activeItem} />
        {/* right side */}
        <RightSide
          activeItem={activeItem}
          handlePrevItem={handlePrevItem}
          handleNextItem={handleNextItem}
        />
      </div>
    </div>
  );
}

function LeftSide({ activeItem }) {
  const handleError = () => toast.error("Currently, the project is not online");

  return (
    <div className="flex flex-col gap-1 w-[620px]">
      {/* number */}
      <div
        style={{
          WebkitTextStroke: "3px white",
        }}
        className="flex justify-start font-Lexend font-black text-9xl text-center text-transparent"
      >
        {<h1>{String(activeItem?.id ?? "").padStart(2, "0")}</h1>}
      </div>
      {/* title */}
      <div>
        <h1 className="text-white text-5xl/loose font-Lexend font-black">
          {activeItem.title}
        </h1>
      </div>
      {/* description */}
      <div className="flex justify-start items-center">
        <h3 className="font-Lexend text-white font-normal text-lg">
          {activeItem.description}
        </h3>
      </div>
      {/* tags */}
      <div className="flex justify-start gap-5 mt-10">
        {Array.isArray(activeItem?.tags) && activeItem.tags.length > 0 ? (
          activeItem.tags.map((item, index) => (
            <h6
              key={index}
              className="text-[#00BFAE] font-Lexend font-medium text-lg"
            >
              {item}
            </h6>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </div>

      {/* hr */}
      <div className="">
        <hr className="border border-gray-400 mt-10" />
      </div>
      {/* icons */}
      <div className="flex gap-3 items-center mt-3">
        <div className="relative group">
          <Link
            onClick={handleError}
            to="/work"
            className="bg-[#0f152674] rounded-full p-5 flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <FaUpRightAndDownLeftFromCenter className="size-10 fill-white" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 ease-in-out shadow-lg bg-[#1a202c] p-2 rounded-md">
              Open
            </span>
          </Link>
        </div>

        <div className="relative group">
          <Link
            to={activeItem.githubLink}
            className="bg-[#0f152674] rounded-full p-5 flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <FaGithub className="size-10 fill-white" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-300 ease-in-out shadow-lg bg-[#1a202c] p-2 rounded-md">
              GitHub
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RightSide({ handlePrevItem, handleNextItem, activeItem }) {
  return (
    <div className="flex flex-col gap-3">
      {/* img */}
      <div className="">
        <img
          loading="lazy"
          src={activeItem.picture}
          alt="Project Picture"
          className="rounded-2xl shadow-2xl outline outline-gray-500 w-[670px] h-[362px] object-contain"
        />
      </div>
      {/* button */}
      <div className="flex items-center gap-2 justify-end me-3">
        <button onClick={handlePrevItem} className="shadow-2xs cursor-pointer">
          <FaArrowAltCircleLeft className="size-13 fill-[#00BFAE]" />
        </button>
        <button onClick={handleNextItem} className="shadow-2xs cursor-pointer">
          <FaArrowAltCircleRight className="size-13 fill-[#00BFAE]" />
        </button>
      </div>
    </div>
  );
}
