import { useState, useEffect } from "react";

const ResolutionBlock = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6 z-50">
        <div className="w-[90%] max-w-[400px] bg-gray-900 rounded-lg p-5 shadow-lg">
          <p className="text-xl font-bold">
            این سایت هنوز برای گوشی‌های موبایل بهینه‌سازی نشده است!
          </p>
          <p className="mt-3 text-sm leading-6">
            لطفاً از یک دستگاه دسکتاپ یا تبلت استفاده کنید.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ResolutionBlock;
