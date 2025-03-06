import { useState, useEffect } from "react";

const ResolutionBlock = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      if (window.innerWidth < 1280) {
        alert(
          "این سایت هنوز برای گوشی‌های موبایل بهینه‌سازی نشده است! لطفاً از دستگاه دسکتاپ استفاده کنید."
        );
        setIsBlocked(true);
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  if (isBlocked) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-xl font-bold">
        دسترسی به سایت در حالت موبایل محدود شده است.
      </div>
    );
  }

  return null;
};

export default ResolutionBlock;
