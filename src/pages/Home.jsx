import { Link } from "react-router-dom";
import World from "../components/Planet/Planet";
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";
function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="container mx-auto flex flex-col px-12 mt-4">
        <article className="flex">
          {/* left card */}
          <div className="bg-[#00BFAE] w-[525px] h-[610px] rounded-4xl">
            {/* About me */}
            <Suspense fallback={<p>loading ...</p>}>
              {" "}
              <Link
                to="/resume"
                className="flex 2xl:gap-x-3 xl:gap-x-2 py-1.5 -mt-0.5 items-center 2xl:w-3/8  xl:w-4/10 bg-[#1C1C22] rounded-br-4xl"
              >
                <div>
                  <svg
                    className="fill-white"
                    width="37"
                    height="37"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3704 0H9.62963C7.07569 0 4.62636 1.01455 2.82045 2.82045C1.01455 4.62636 0 7.07569 0 9.62963V30.3704C0 32.9243 1.01455 35.3736 2.82045 37.1795C4.62636 38.9855 7.07569 40 9.62963 40H30.3704C32.9243 40 35.3736 38.9855 37.1795 37.1795C38.9855 35.3736 40 32.9243 40 30.3704V9.62963C40 7.07569 38.9855 4.62636 37.1795 2.82045C35.3736 1.01455 32.9243 0 30.3704 0ZM38.5185 30.3704C38.5185 32.5314 37.6601 34.6039 36.132 36.132C34.6039 37.6601 32.5314 38.5185 30.3704 38.5185H9.62963C7.46861 38.5185 5.39609 37.6601 3.86802 36.132C2.33994 34.6039 1.48148 32.5314 1.48148 30.3704V9.62963C1.48148 7.46861 2.33994 5.39609 3.86802 3.86802C5.39609 2.33994 7.46861 1.48148 9.62963 1.48148H30.3704C32.5314 1.48148 34.6039 2.33994 36.132 3.86802C37.6601 5.39609 38.5185 7.46861 38.5185 9.62963V30.3704Z"
                      fill="white"
                    />
                    <path
                      d="M20 6.66666C18.2319 6.66666 16.5362 7.36904 15.286 8.61928C14.0357 9.86952 13.3333 11.5652 13.3333 13.3333C13.3333 13.5298 13.4114 13.7182 13.5503 13.8571C13.6892 13.996 13.8776 14.0741 14.0741 14.0741C14.2705 14.0741 14.4589 13.996 14.5979 13.8571C14.7368 13.7182 14.8148 13.5298 14.8148 13.3333C14.8148 12.4495 15.0407 11.5803 15.4711 10.8083C15.9016 10.0363 16.5221 9.38721 17.274 8.92254C18.0258 8.45787 18.884 8.19311 19.7669 8.15338C20.6499 8.11365 21.5283 8.30028 22.3189 8.69555C23.1094 9.09082 23.7858 9.68161 24.2838 10.4118C24.7818 11.142 25.0849 11.9874 25.1642 12.8677C25.2436 13.7479 25.0967 14.6339 24.7373 15.4414C24.378 16.2489 23.8182 16.9512 23.1111 17.4815L21.9259 18.3704C21.098 18.9913 20.4259 19.7966 19.9631 20.7223C19.5002 21.648 19.2593 22.6687 19.2593 23.7037V26.6667C19.2593 26.8631 19.3373 27.0515 19.4762 27.1904C19.6151 27.3294 19.8035 27.4074 20 27.4074C20.1965 27.4074 20.3849 27.3294 20.5238 27.1904C20.6627 27.0515 20.7407 26.8631 20.7407 26.6667V23.7037C20.7407 22.8987 20.9282 22.1048 21.2882 21.3848C21.6482 20.6648 22.1708 20.0385 22.8148 19.5555L24 18.6667C25.1194 17.8271 25.9462 16.6567 26.3634 15.3211C26.7806 13.9855 26.767 12.5526 26.3246 11.2251C25.8821 9.89772 25.0332 8.74318 23.8981 7.92504C22.763 7.10691 21.3992 6.66666 20 6.66666ZM20 31.8518C19.8035 31.8518 19.6151 31.9299 19.4762 32.0688C19.3373 32.2077 19.2593 32.3961 19.2593 32.5926C19.2593 32.789 19.3373 32.9774 19.4762 33.1164C19.6151 33.2553 19.8035 33.3333 20 33.3333C20.1965 33.3333 20.3849 33.2553 20.5238 33.1164C20.6627 32.9774 20.7407 32.789 20.7407 32.5926C20.7407 32.3961 20.6627 32.2077 20.5238 32.0688C20.3849 31.9299 20.1965 31.8518 20 31.8518Z"
                      fill="white"
                    />
                  </svg>
                </div>
                {/* text */}
                <div
                  title="About me"
                  className="font-Lexend font-semibold text-2xl text-white"
                >
                  About Me
                </div>
              </Link>
            </Suspense>
            {/* circle and typography and photo */}
            <Link to="/resume" className="relative flex justify-end mr-14">
              {/* gold */}
              <div className="rounded-full bg-[#D4AF37] 2xl:w-[352px] 2xl:h-[352px] xl:w-[320px] 2xl:relative xl:absolute 2xl:right-0 xl:top-2.5 xl:-right-9 xl:h-[320px]"></div>
              {/* white */}
              <div className="absolute 2xl:-bottom-6 2xl:-right-6 xl:-bottom-86 xl:-right-12.75 justify-end">
                <div className="2xl:w-[399px] 2xl:h-[399px] xl:w-[350px] xl:h-[350px] rounded-full border-8 border-white"></div>
              </div>
              {/* img */}
              <img
                loading="lazy"
                alt="hesam zahed photo"
                src="/images/crop me - Copy.webp"
                className="hidden 2xl:block absolute 2xl:-top-59 xl:-top-45 2xl:-right-15 xl:-right-18 2xl:scale-75 xl:scale-85"
              />
              <img
                loading="lazy"
                alt="hesam zahed photo"
                src="/images/xl-size-photo.webp"
                className="hidden 2xl:hidden xl:block absolute 2xl:-top-59 xl:-top-63 2xl:-right-15 xl:-right-22 2xl:scale-75 xl:scale-80 xl-photo-me"
              />
              {/* typography */}
              <div className="flex flex-col absolute 2xl:-bottom-50 xl:top-55 left-6 justify-start">
                <span className="text-slate-800 font-Lexend font-medium text-8xl">
                  im,
                </span>
                <span className="text-white font-Lexend font-bold text-8xl">
                  Hesam
                </span>
                <span className="text-white font-Lexend font-bold text-8xl">
                  Zahed
                </span>
                {/* email */}
                <div className=" flex items-center gap-2">
                  <span className="text-white hover:text-black border-white border-dotted border-b-2  font-Lexend font-medium text-xl">
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
                    <path
                      d="M26 12.25H18.5L16 16H11L8.5 12.25H1"
                      stroke="white"
                    />
                    <path
                      d="M5.3375 2.4875L1 12.25V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H23.5C24.163 21 24.7989 20.7366 25.2678 20.2678C25.7366 19.7989 26 19.163 26 18.5V12.25L21.6625 2.4875C21.4663 2.0446 21.1457 1.66823 20.7396 1.40415C20.3335 1.14008 19.8594 0.99967 19.375 1H7.625C7.14059 0.99967 6.66652 1.14008 6.26042 1.40415C5.85432 1.66823 5.53369 2.0446 5.3375 2.4875Z"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* right card */}
          <div className="ml-20 relative">
            {/* text */}
            <Suspense fallback={<p>loading ...</p>}>
              <div className="flex justify-start absolute -top-3.5 items-start text-white font-black font-Arial text-9xl">
                <span>Portfolio</span>
              </div>
            </Suspense>
            {/* image and status */}
            <div className="flex justify-between gap-8 ml-2 mt-25">
              {/* img */}
              <div>
                <img
                  loading="lazy"
                  alt="article photo"
                  className="w-[475px] h-[350px] object-cover rounded-2xl"
                  src="/images/DALL·E .webp"
                />
              </div>
              {/* box */}
              <div className="flex flex-col">
                <div className="bg-[#00BFAE] flex flex-col items-start justify-center rounded-t-4xl p-5">
                  <span className="font-Lexend font-extrabold text-8xl">5</span>
                  <span className="font-Lexend font-normal text-4xl">
                    Projects
                  </span>
                </div>
                <div className="bg-[#D4AF37] flex flex-col items-start justify-center rounded-b-4xl p-5">
                  <span className="font-Lexend font-extrabold text-8xl">4</span>
                  <span className="font-Lexend font-normal text-4xl">
                    Awards
                  </span>
                </div>
              </div>
            </div>
            {/* client and location */}
            <div className="flex ml-2">
              {/* client */}
              <div className="bg-[#585858] py-5 2xl:h-[155px] xl:h-[156px] mt-1 2xl:px-13 xl:px-10 rounded-4xl flex flex-col items-center justify-center">
                {/* svg */}
                <svg
                  className="2xl:mt-3 xl:mt-3"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55 0L25.3 4.4V26.4L55 26.125V0ZM22.55 28.875L0 28.6V47.3L22.275 50.325L22.55 28.875ZM0 7.7V26.4H22.275V4.675L0 7.7ZM25.025 28.875V50.6L55 55V29.15L25.025 28.875Z"
                    fill="white"
                  />
                </svg>
                <span className="font-Lexend font-normal 2xl:text-3xl xl:text-xl 2xl:mt-3 xl:mt-4  text-white">
                  Client
                </span>
              </div>
              {/* front end */}
              <div className="ml-3 bg-[#585858] py-5 mt-1 2xl:h-[155px] xl:h-[156px] px-5.5 rounded-4xl flex flex-col items-center justify-center">
                {/* svg */}
                {/* client and location */}
                <div className="bg-[#585858] rounded-4xl flex flex-col">
                  {/* svg */}
                  <svg
                    className="mt-2"
                    width="55"
                    height="62"
                    viewBox="0 0 55 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M52.7442 37.9844H46.3907C45.5112 36.5893 44.2054 35.51 42.6642 34.9044L30.8341 30.2762C30.4574 30.1305 30.134 29.8748 29.9065 29.543C29.6789 29.2111 29.558 28.8186 29.5595 28.4171V26.4336C30.9129 25.2839 32.0081 23.8648 32.7743 22.2681C33.5405 20.6715 33.9605 18.9329 34.0073 17.1648C34.7967 17.0621 35.5215 16.678 36.047 16.0842C36.5724 15.4903 36.8627 14.727 36.8638 13.9364C36.8629 13.2571 36.5908 12.6059 36.1071 12.1256C35.6234 11.6452 34.9677 11.375 34.2836 11.3742H34.0117V4.17773C34.0122 3.51138 33.8511 2.85471 33.542 2.26324C33.5362 2.25042 33.5297 2.23789 33.5226 2.2257C33.1649 1.55435 32.6299 0.992431 31.9749 0.600302C31.3199 0.208173 30.5697 0.000643674 29.8048 0L17.7645 0C16.6492 0.00124997 15.5799 0.441804 14.7913 1.22501C14.0026 2.00822 13.559 3.07011 13.5578 4.17773V11.3743H13.2858C12.6018 11.3751 11.946 11.6453 11.4623 12.1257C10.9786 12.606 10.7065 13.2573 10.7057 13.9367C10.7068 14.7272 10.9971 15.4904 11.5225 16.0843C12.0479 16.6781 12.7727 17.0622 13.562 17.1649C13.6088 18.933 14.0289 20.6716 14.795 22.2683C15.5612 23.8649 16.6565 25.284 18.0098 26.4337V28.4171C18.0114 28.8186 17.8904 29.2111 17.6629 29.543C17.4354 29.8748 17.112 30.1305 16.7353 30.2762L4.90513 34.9044C3.45545 35.4651 2.21081 36.4487 1.3352 37.7257C0.459595 39.0028 -0.00589849 40.5133 5.64283e-05 42.0583V61.5762C5.64283e-05 61.6886 0.0450199 61.7964 0.125055 61.8759C0.20509 61.9553 0.313642 62 0.426829 62C0.540016 62 0.648567 61.9553 0.728602 61.8759C0.808637 61.7964 0.853601 61.6886 0.853601 61.5762V55.3985H8.61841V61.5762C8.61841 61.6886 8.66338 61.7964 8.74341 61.8759C8.82345 61.9553 8.932 62 9.04519 62C9.15837 62 9.26692 61.9553 9.34696 61.8759C9.42699 61.7964 9.47196 61.6886 9.47196 61.5762V52.7153C9.47196 52.6029 9.42699 52.4951 9.34696 52.4156C9.26692 52.3361 9.15837 52.2914 9.04519 52.2914C8.932 52.2914 8.82345 52.3361 8.74341 52.4156C8.66338 52.4951 8.61841 52.6029 8.61841 52.7153V54.5508H0.853601V42.0583C0.848315 40.6836 1.26251 39.3397 2.04161 38.2034C2.8207 37.0672 3.92815 36.192 5.21802 35.6932L16.0446 31.4575C16.7636 32.8847 17.8684 34.085 19.2355 34.9238C20.6025 35.7627 22.1777 36.207 23.7847 36.207C25.3916 36.207 26.9668 35.7627 28.3339 34.9238C29.7009 34.085 30.8058 32.8847 31.5247 31.4575L42.3513 35.6932C43.5489 36.1639 44.5903 36.9574 45.3581 37.9843H33.0734C32.4754 37.985 31.902 38.2212 31.4791 38.6412C31.0562 39.0612 30.8183 39.6306 30.8176 40.2246V59.7598C30.8183 60.3537 31.0562 60.9232 31.4791 61.3431C31.902 61.7631 32.4754 61.9994 33.0734 62H52.7442C53.3423 61.9993 53.9156 61.7631 54.3385 61.3431C54.7614 60.9231 54.9993 60.3537 55 59.7598V40.2247C54.9993 39.6307 54.7614 39.0613 54.3385 38.6413C53.9156 38.2214 53.3423 37.9851 52.7442 37.9844ZM34.0116 12.291V12.222H34.2835C34.7413 12.2225 35.1801 12.4034 35.5038 12.7248C35.8275 13.0463 36.0096 13.4821 36.0101 13.9367C36.0094 14.5018 35.809 15.0488 35.4437 15.4821C35.0785 15.9155 34.5716 16.2077 34.0116 16.3079V12.291ZM13.5578 12.291V16.3079C12.9977 16.2077 12.4909 15.9155 12.1256 15.4821C11.7604 15.0488 11.5599 14.5018 11.5592 13.9367C11.5598 13.4821 11.7418 13.0462 12.0655 12.7248C12.3892 12.4033 12.8281 12.2225 13.2858 12.222H13.5578V12.291ZM33.1132 3.63693C33.1429 3.81569 33.1579 3.99656 33.1581 4.17773V11.4997C32.4682 10.9957 31.8646 10.3848 31.3702 9.69029C30.8673 8.97959 30.4868 8.19076 30.2445 7.35608C30.833 6.86094 31.3681 6.30647 31.8413 5.70158C32.3402 5.06174 32.7667 4.36937 33.1132 3.63693ZM25.9185 13.8436C25.5791 13.8439 25.2537 13.978 25.0136 14.2164C24.7736 14.4548 24.6386 14.7779 24.6382 15.115V15.4782H22.9311V15.115C22.9307 14.7779 22.7957 14.4548 22.5557 14.2164C22.3157 13.978 21.9903 13.8439 21.6508 13.8436H17.4989L15.5164 12.6907C18.3216 12.571 21.0888 12.0013 23.7107 11.0037C25.7716 10.2188 27.7238 9.17709 29.5204 7.90367C29.7895 8.71386 30.1776 9.48016 30.672 10.1778C31.2488 10.9885 31.9597 11.6963 32.7746 12.271L30.0704 13.8436H25.9185ZM29.7595 14.6912V16.6893C29.7594 16.8016 29.7143 16.9094 29.6343 16.9888C29.5543 17.0683 29.4459 17.113 29.3327 17.1131H25.9185C25.8054 17.113 25.6969 17.0683 25.6169 16.9888C25.5369 16.9094 25.4919 16.8016 25.4918 16.6893V15.115C25.4919 15.0027 25.5369 14.8949 25.6169 14.8155C25.6969 14.736 25.8054 14.6913 25.9185 14.6912H29.7595ZM22.0776 15.115V16.6893C22.0775 16.8016 22.0325 16.9094 21.9524 16.9888C21.8724 17.0683 21.764 17.113 21.6508 17.1131H18.2366C18.1235 17.113 18.015 17.0683 17.935 16.9888C17.855 16.9094 17.81 16.8016 17.8099 16.6893V14.6912H21.6508C21.764 14.6913 21.8724 14.736 21.9524 14.8155C22.0325 14.8949 22.0775 15.0027 22.0776 15.115ZM14.4113 11.7983V4.17773C14.4123 3.29485 14.7659 2.44841 15.3945 1.82411C16.0232 1.19982 16.8755 0.84865 17.7645 0.847656H29.8048C30.3848 0.848005 30.9547 0.997657 31.459 1.28201C31.9633 1.56636 32.3848 1.9757 32.6823 2.47007C32.3189 3.44531 31.8079 4.35979 31.1669 5.18196C30.6778 5.80728 30.1173 6.37408 29.4966 6.87098C27.6313 8.25865 25.5814 9.383 23.4053 10.212C20.5339 11.3033 17.4858 11.8645 14.4113 11.8679V11.7983ZM15.4469 21.6484C14.7619 20.1339 14.409 18.4921 14.4113 16.8319V13.0303L16.9563 14.5104V16.6893C16.9567 17.0264 17.0917 17.3495 17.3317 17.5879C17.5718 17.8263 17.8972 17.9604 18.2366 17.9607H21.6508C21.9903 17.9604 22.3157 17.8263 22.5557 17.5879C22.7957 17.3495 22.9307 17.0264 22.9311 16.6893V16.3259H24.6382V16.6893C24.6386 17.0264 24.7736 17.3495 25.0136 17.5879C25.2537 17.8263 25.5791 17.9604 25.9185 17.9607H29.3327C29.6722 17.9604 29.9976 17.8263 30.2376 17.5879C30.4776 17.3495 30.6126 17.0264 30.613 16.6893V14.5104L33.1581 13.0303V16.832C33.1581 18.8008 32.6617 20.7381 31.7144 22.4675C30.767 24.1969 29.3988 25.6632 27.7344 26.7327C26.5573 27.4875 25.1859 27.8889 23.7847 27.8889C22.3836 27.8889 21.0122 27.4875 19.8351 26.7327C17.9074 25.4958 16.3829 23.7294 15.4469 21.6484ZM23.7847 35.3594C22.3494 35.3581 20.9422 34.9641 19.7175 34.2207C18.4929 33.4774 17.4981 32.4133 16.8424 31.1453L17.0481 31.0649C17.5846 30.8574 18.0453 30.4933 18.3693 30.0206C18.6933 29.5479 18.8656 28.9889 18.8634 28.4171V27.098C19.0299 27.2167 19.1985 27.3329 19.3714 27.4441C20.6866 28.2875 22.219 28.7361 23.7847 28.7361C25.3503 28.7361 26.8827 28.2875 28.198 27.4441C28.3709 27.333 28.5394 27.2167 28.706 27.098V28.4171C28.7038 28.9889 28.876 29.5479 29.2 30.0206C29.5241 30.4933 29.9847 30.8574 30.5212 31.0649L30.727 31.1454C30.0713 32.4134 29.0765 33.4775 27.8519 34.2208C26.6272 34.9642 25.22 35.3581 23.7847 35.3594ZM54.1465 59.7598C54.146 60.129 53.9982 60.4829 53.7353 60.744C53.4724 61.0051 53.116 61.1519 52.7442 61.1523H33.0734C32.7017 61.1519 32.3452 61.0051 32.0824 60.744C31.8195 60.4829 31.6716 60.129 31.6712 59.7598V43.0704H54.1465V59.7598ZM54.1465 42.2227H31.6712V40.2247C31.6716 39.8555 31.8195 39.5015 32.0824 39.2404C32.3452 38.9794 32.7017 38.8325 33.0734 38.8321H52.7442C53.116 38.8325 53.4724 38.9794 53.7353 39.2404C53.9982 39.5015 54.146 39.8555 54.1465 40.2247V42.2227ZM46.8138 54.5232C46.7238 54.5915 46.6649 54.6924 46.6499 54.8038C46.6349 54.9152 46.6651 55.028 46.7339 55.1173C46.8026 55.2066 46.9042 55.2652 47.0164 55.2801C47.1286 55.295 47.2422 55.265 47.3321 55.1967L50.4463 52.833C50.558 52.7482 50.6485 52.639 50.7108 52.5138C50.7731 52.3887 50.8055 52.251 50.8055 52.1114C50.8055 51.9718 50.7731 51.834 50.7108 51.7089C50.6485 51.5837 50.558 51.4745 50.4463 51.3898L47.3321 49.026C47.2422 48.9578 47.1286 48.9278 47.0164 48.9427C46.9042 48.9575 46.8026 49.0161 46.7339 49.1054C46.6651 49.1947 46.6349 49.3075 46.6499 49.4189C46.6649 49.5303 46.7238 49.6313 46.8138 49.6995L49.9281 52.0633C49.9356 52.0689 49.9416 52.0762 49.9457 52.0845C49.9499 52.0928 49.952 52.102 49.952 52.1113C49.952 52.1206 49.9499 52.1298 49.9457 52.1381C49.9416 52.1464 49.9356 52.1537 49.9281 52.1593L46.8138 54.5232ZM37.1386 40.1491C37.0542 40.1491 36.9717 40.174 36.9015 40.2205C36.8313 40.2671 36.7766 40.3333 36.7443 40.4108C36.712 40.4882 36.7036 40.5734 36.72 40.6556C36.7365 40.7378 36.7772 40.8134 36.8368 40.8726C36.8965 40.9319 36.9726 40.9723 37.0554 40.9886C37.1381 41.005 37.2239 40.9966 37.3019 40.9645C37.3799 40.9324 37.4466 40.8781 37.4935 40.8084C37.5404 40.7387 37.5654 40.6568 37.5654 40.5729C37.5654 40.4605 37.5204 40.3527 37.4404 40.2733C37.3604 40.1938 37.2518 40.1491 37.1386 40.1491ZM35.4315 40.1491C35.3471 40.1491 35.2646 40.174 35.1944 40.2205C35.1242 40.2671 35.0695 40.3333 35.0372 40.4108C35.0049 40.4882 34.9965 40.5734 35.013 40.6556C35.0294 40.7378 35.0701 40.8134 35.1298 40.8726C35.1894 40.9319 35.2655 40.9723 35.3483 40.9886C35.4311 41.005 35.5169 40.9966 35.5948 40.9645C35.6728 40.9324 35.7395 40.8781 35.7864 40.8084C35.8333 40.7387 35.8583 40.6568 35.8583 40.5729C35.8583 40.4605 35.8133 40.3527 35.7333 40.2733C35.6533 40.1938 35.5447 40.1491 35.4315 40.1491ZM35.3712 52.833L38.4854 55.1967C38.5299 55.2305 38.5807 55.2553 38.6349 55.2696C38.6891 55.2839 38.7455 55.2875 38.8011 55.2801C38.8567 55.2728 38.9102 55.2546 38.9587 55.2267C39.0072 55.1987 39.0497 55.1616 39.0837 55.1174C39.1178 55.0732 39.1427 55.0227 39.1571 54.9689C39.1715 54.9151 39.1751 54.859 39.1677 54.8039C39.1603 54.7487 39.142 54.6955 39.1139 54.6473C39.0858 54.5992 39.0484 54.557 39.0039 54.5232L35.8895 52.1594C35.8821 52.1538 35.876 52.1465 35.8719 52.1382C35.8677 52.1298 35.8655 52.1207 35.8655 52.1114C35.8655 52.1021 35.8677 52.0929 35.8719 52.0845C35.876 52.0762 35.8821 52.0689 35.8895 52.0633L39.0037 49.6995C39.0483 49.6657 39.0857 49.6236 39.1138 49.5754C39.1419 49.5273 39.1602 49.4741 39.1677 49.4189C39.1751 49.3638 39.1715 49.3077 39.1571 49.2539C39.1427 49.2001 39.1178 49.1496 39.0838 49.1054C39.0498 49.0612 39.0073 49.024 38.9588 48.9961C38.9103 48.9682 38.8568 48.95 38.8012 48.9426C38.7457 48.9352 38.6892 48.9388 38.635 48.9531C38.5809 48.9674 38.53 48.9921 38.4855 49.0259L35.3713 51.3896C35.2596 51.4744 35.169 51.5836 35.1067 51.7088C35.0444 51.8339 35.012 51.9717 35.012 52.1113C35.012 52.2509 35.0444 52.3887 35.1067 52.5138C35.169 52.639 35.2596 52.7482 35.3713 52.833H35.3712ZM33.7244 40.1491C33.64 40.1491 33.5575 40.174 33.4873 40.2205C33.4172 40.2671 33.3625 40.3333 33.3302 40.4108C33.2978 40.4882 33.2894 40.5734 33.3059 40.6556C33.3223 40.7378 33.363 40.8134 33.4227 40.8726C33.4823 40.9319 33.5584 40.9723 33.6412 40.9886C33.724 41.005 33.8098 40.9966 33.8878 40.9645C33.9657 40.9324 34.0324 40.8781 34.0793 40.8084C34.1262 40.7387 34.1512 40.6568 34.1512 40.5729C34.1512 40.4605 34.1062 40.3527 34.0262 40.2733C33.9462 40.1938 33.8376 40.1491 33.7244 40.1491ZM40.9594 55.8673C41.0093 55.8929 41.0636 55.9084 41.1195 55.9131C41.1754 55.9177 41.2316 55.9114 41.285 55.8944C41.3384 55.8775 41.3879 55.8503 41.4307 55.8143C41.4735 55.7783 41.5087 55.7343 41.5344 55.6848L45.0419 48.9262C45.093 48.8264 45.1022 48.7106 45.0675 48.6041C45.0328 48.4975 44.9571 48.4089 44.8569 48.3577C44.7567 48.3064 44.6402 48.2965 44.5327 48.3303C44.4252 48.3641 44.3355 48.4387 44.2833 48.5379L40.7757 55.2965C40.7238 55.3964 40.7141 55.5126 40.7485 55.6197C40.783 55.7267 40.8589 55.8158 40.9594 55.8673ZM23.7847 22.0197C24.3085 22.0191 24.8107 21.8123 25.1811 21.4445C25.5515 21.0767 25.7599 20.578 25.7605 20.0578V19.3882C25.7605 19.2758 25.7155 19.168 25.6355 19.0885C25.5555 19.009 25.4469 18.9644 25.3337 18.9644C25.2205 18.9644 25.112 19.009 25.032 19.0885C24.9519 19.168 24.907 19.2758 24.907 19.3882V20.0578C24.907 20.3534 24.7887 20.6369 24.5783 20.846C24.3678 21.055 24.0823 21.1724 23.7847 21.1724C23.487 21.1724 23.2016 21.055 22.9911 20.846C22.7806 20.6369 22.6624 20.3534 22.6624 20.0578V19.3882C22.6624 19.2758 22.6174 19.168 22.5374 19.0885C22.4573 19.009 22.3488 18.9644 22.2356 18.9644C22.1224 18.9644 22.0139 19.009 21.9338 19.0885C21.8538 19.168 21.8088 19.2758 21.8088 19.3882V20.0578C21.8095 20.578 22.0179 21.0767 22.3883 21.4445C22.7587 21.8122 23.2609 22.0192 23.7847 22.0197ZM21.8681 24.3575C22.4675 24.6386 23.122 24.7848 23.7849 24.7857H23.7983C24.4565 24.7827 25.1061 24.6366 25.7012 24.3575C25.8035 24.3094 25.8824 24.2229 25.9205 24.117C25.9586 24.0111 25.9527 23.8946 25.9043 23.793C25.8558 23.6914 25.7687 23.6131 25.6621 23.5753C25.5555 23.5374 25.4381 23.5432 25.3358 23.5914C24.8541 23.8173 24.3285 23.9356 23.7958 23.9381H23.7848C23.2483 23.9373 22.7186 23.8189 22.2335 23.5914C22.1312 23.5432 22.0139 23.5374 21.9073 23.5753C21.8007 23.6131 21.7135 23.6914 21.6651 23.793C21.6166 23.8946 21.6108 24.0111 21.6489 24.117C21.6869 24.2229 21.7658 24.3094 21.8681 24.3575Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="font-Lexend font-normal 2xl:text-3xl xl:text-xl mt-3 text-white">
                  Front-End
                </span>
              </div>
              {/* location */}
              <div className="flex items-center justify-center xl:mt-8 2xl:mt-0.5 ml-3 2xl:h-[155px] xl:h-[132px]">
                {/* planet */}
                <div className="bg-black rounded-l-4xl 2xl:mt-1 xl:-mt-7.5 overflow-hidden">
                  <Suspense fallback={<p>loading ...</p>}>
                    <World />
                  </Suspense>
                </div>
                <div className="bg-[#D4AF37] rounded-r-4xl 2xl:p-4.5 xl:py-6 2xl:px-0 xl:px-3.5 2xl:mt-1 xl:-mt-7.5 flex flex-col">
                  <span className="text-black font-Lexend font-normal 2xl:text-4xl xl:text-3xl">
                    Located in
                  </span>
                  <span className="text-black font-Lexend font-bold 2xl:text-4xl xl:text-3xl">
                    Tehran,
                  </span>
                  <span className="text-black font-Lexend font-black 2xl:text-4xl xl:text-3xl">
                    Iran
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
        </article>
        <Footer />
      </section>
    </Suspense>
  );
}
export default Home;
