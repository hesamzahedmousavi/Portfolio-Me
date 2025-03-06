import { Link } from "react-router-dom";

function About() {
  return (
    <section className="flex items-center h-screen 2xl:gap-40 xl:gap-x-20 text-white">
      {/* Left Side */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <span className="text-9xl">👨‍💻</span>
        </div>
        <h1 className="font-Lexend text-6xl font-bold">About me</h1>
      </div>

      {/* Right Side */}
      <div className="w-2/3 space-y-6 xl:mt-30 2xl:mt-0">
        {/* Description */}
        <p className="text-lg leading-relaxed">
          Passionate Frontend Developer with 1 year of hands-on experience,
          specializing in{" "}
          <strong>
            HTML, CSS, Tailwind, JavaScript, React, SEO, REST API, GraphQL,
            Redux Toolkit, React Query, and Git.
          </strong>{" "}
          I thrive on building high-performance, user-centric web applications
          and continuously seek to push the boundaries of modern frontend
          development.
          <br />
          <br />I am highly skilled in state management, API integration, and
          performance optimization, ensuring seamless and efficient user
          experiences. With a strong understanding of SEO best practices and web
          accessibility, I craft applications that are both visually stunning
          and functionally robust. 🚀
        </p>

        {/* Personal Info */}
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <span className="text-[#00BFAE] font-semibold">Name</span> <br />
            <span className="font-bold">Hesam Zahed</span>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Phone</span> <br />
            <h1 className="font-bold">(+98) 921 767 1510</h1>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Experience</span>{" "}
            <br />
            <span className="font-bold">1 Years</span>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Github</span> <br />
            <Link
              to={"https://github.com/hesamzahedmousavi"}
              title="email"
              className=" flex items-center gap-2"
            >
              <span className="text-white hover:text-[#D4AF37] border-white border-dotted border-b-2  font-Lexend font-medium">
                hesamzahedmousavi
              </span>
            </Link>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Nationality</span>{" "}
            <br />
            <span className="font-bold">Iranian</span>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Email</span> <br />
            <Link
              to={"/contact"}
              title="email"
              className=" flex items-center gap-2"
            >
              <span className="text-white hover:text-[#D4AF37] border-white border-dotted border-b-2  font-Lexend font-medium">
                HesamzahedFreeelance@gmail.com
              </span>
              <svg
                className="stroke-2"
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M26 12.25H18.5L16 16H11L8.5 12.25H1" stroke="white" />
                <path
                  d="M5.3375 2.4875L1 12.25V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H23.5C24.163 21 24.7989 20.7366 25.2678 20.2678C25.7366 19.7989 26 19.163 26 18.5V12.25L21.6625 2.4875C21.4663 2.0446 21.1457 1.66823 20.7396 1.40415C20.3335 1.14008 19.8594 0.99967 19.375 1H7.625C7.14059 0.99967 6.66652 1.14008 6.26042 1.40415C5.85432 1.66823 5.53369 2.0446 5.3375 2.4875Z"
                  stroke="white"
                />
              </svg>
            </Link>
          </div>
          <div>
            <span className="text-[#00BFAE] font-semibold">Language</span>{" "}
            <br />
            <span className="font-bold">Persian, English</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
