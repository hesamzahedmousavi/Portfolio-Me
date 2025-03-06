import { useEffect } from "react";

const ResolutionBlock = () => {
  useEffect(() => {
    const checkResolution = () => {
      if (window.innerWidth < 1280) {
        alert(
          "این سایت هنوز برای گوشی‌های موبایل بهینه‌سازی نشده است! لطفاً از دستگاه دسکتاپ استفاده کنید."
        );
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  return null;
};

export default ResolutionBlock;
