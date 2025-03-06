import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  resetForm,
  setEmail,
  setError,
  setMessage,
} from "../redux/form/formSlice";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const dispatch = useDispatch();
  const { email, message, errors } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();

    emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
      (result) => {
        console.log("Message sent: ", result.text);
      },
      (error) => {
        console.log("Error: ", error.text);
      }
    );

    let isValid = true;
    let hasError = false;

    const emailRegex =
      /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "icloud.com",
    ];

    if (!email.trim()) {
      dispatch(setError({ field: "email", value: true }));
      toast.error("Email is required.");
      isValid = false;
      hasError = true;
    } else if (!emailRegex.test(email)) {
      dispatch(setError({ field: "email", value: true }));
      toast.error("The email format is not valid.");
      isValid = false;
      hasError = true;
    } else {
      const domain = email.split("@")[1];
      if (!validDomains.includes(domain)) {
        dispatch(setError({ field: "email", value: true }));
        toast.error("Please enter a valid email domain.");
        isValid = false;
        hasError = true;
      } else {
        dispatch(setError({ field: "email", value: false }));
      }
    }

    if (!isValid) return;

    toast.success("Send was successful.");
    dispatch(resetForm());
  };

  return (
    <div className="container mx-auto px-12 flex items-start justify-around gap-12 mt-8">
      {/* left side */}
      <div className="flex flex-col rounded-3xl bg-[#27272C] px-7 py-6 w-[888px]">
        {/* title */}
        <div className="">
          <h1 className="text-[#00BFAE] font-Lexend font-semibold text-6xl">
            Let's work together
          </h1>
        </div>
        {/* discription */}
        <div className="mt-5">
          <p className="font-Lexend font-normal text-lg text-[#909090] leading-10">
            I m a passionate Frontend Developer. Whether you have a project in
            mind, need some advice, or just want to connect, I d love to hear
            from you. Let scollaborate and bring your ideas to life!
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
          {/* email */}
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="Email address"
            className={`boxs ${
              errors.email ? "outline-2 outline-red-500" : ""
            }`}
            name="user_email"
          />
          {/* text */}
          <textarea
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            placeholder="Type your message here..."
            className="w-full h-55 bg-[#1C1C22] text-[#909090] text-base p-4 rounded-3xl  focus:outline-[#00BFAE] focus:outline-2 focus:transition resize-none"
            name="message"
            dir="auto"
          ></textarea>

          {/* button */}
          <div className="bg-[#4B5563] rounded-4xl w-56 flex items-center justify-center py-3 mt-1 cursor-pointer">
            <button
              type="submit"
              className="font-Lexend font-normal text-lg text-white cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* right side */}
      <div className="flex flex-col mt-5 gap-y-5">
        {/* one */}
        <div className="flex gap-x-3">
          {/* svg */}
          <div className="p-5 rounded-2xl bg-[#27272C]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2566 11.4732C19.6058 3.98298 11.7964 0.307751 11.4659 0.157741C11.1569 0.0124151 10.8106 -0.0340164 10.4743 0.0247783C1.45871 1.52146 0.102618 6.77179 0.0481015 6.98999C-0.0260702 7.29405 -0.0142732 7.61276 0.0821742 7.9105C10.8355 41.2944 33.1838 47.4823 40.5299 49.5177C41.0955 49.6745 41.5623 49.8006 41.9166 49.9165C42.321 50.0487 42.7603 50.0232 43.1466 49.8449C43.3715 49.7427 48.68 47.2402 49.9782 39.0784C50.0358 38.7221 49.9785 38.3567 49.8147 38.0351C49.6988 37.8101 46.9219 32.5223 39.2215 30.654C38.9602 30.5871 38.6867 30.5848 38.4243 30.6471C38.162 30.7095 37.9187 30.8347 37.7155 31.0119C35.2861 33.0882 31.9299 35.3009 30.4818 35.5293C20.7745 30.7801 15.3536 21.667 15.1491 19.9385C15.0299 18.9669 17.2548 15.5542 19.8137 12.779C19.9745 12.6043 20.097 12.3979 20.1733 12.173C20.2496 11.9481 20.278 11.7098 20.2566 11.4732Z"
                fill="#00BFAE"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <span className="text-[#00BFAE] font-normal">Phone</span>
            <h1 className="font-bold text-white text-xl">(+98) 921 767 1510</h1>
          </div>
        </div>
        {/* two */}
        <Link to="/contact" className="flex gap-x-3">
          {/* svg */}
          <div className="p-5 rounded-2xl bg-[#27272C]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.40742V3.125C0 2.2962 0.32924 1.50134 0.915291 0.915291C1.50134 0.32924 2.2962 0 3.125 0L46.875 0C47.7038 0 48.4987 0.32924 49.0847 0.915291C49.6708 1.50134 50 2.2962 50 3.125V4.40742L25 20.0324L0 4.40742ZM25.8281 23.2004C25.5797 23.3554 25.2928 23.4376 25 23.4376C24.7072 23.4376 24.4203 23.3554 24.1719 23.2004L0 8.09258V34.375C0 35.2038 0.32924 35.9987 0.915291 36.5847C1.50134 37.1708 2.2962 37.5 3.125 37.5H46.875C47.7038 37.5 48.4987 37.1708 49.0847 36.5847C49.6708 35.9987 50 35.2038 50 34.375V8.09258L25.8281 23.2004Z"
                fill="#00BFAE"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <span className="text-[#00BFAE] font-normal">Email</span>
            <div
              to={"/contact"}
              title="email"
              className=" flex items-center gap-x-2"
            >
              <span className="text-white hover:text-[#D4AF37] border-white border-dotted border-b-2  font-Lexend font-medium text-lg">
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
            </div>
          </div>
        </Link>
        {/* three */}
        <div className="flex gap-x-3">
          {/* svg */}
          <div className="p-5 rounded-2xl bg-[#27272C]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0C11.1964 0 0 11.1292 0 24.85C0 43.4875 25 71 25 71C25 71 50 43.4875 50 24.85C50 11.1292 38.8036 0 25 0ZM25 33.725C20.0714 33.725 16.0714 29.749 16.0714 24.85C16.0714 19.951 20.0714 15.975 25 15.975C29.9286 15.975 33.9286 19.951 33.9286 24.85C33.9286 29.749 29.9286 33.725 25 33.725Z"
                fill="#00BFAE"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <span className="text-[#00BFAE] font-normal">Address</span>
            <h1 className="font-bold text-white text-xl">Tehran,Iran</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
