import { useEffect } from "react";

const ResolutionBlock = () => {
  useEffect(() => {
    const checkResolution = () => {
      if (window.innerWidth < 1280) {
        alert(
          "این سایت هنوز برای گوشی‌های موبایل بهینه‌سازی نشده است! لطفاً از دستگاه دسکتاپ استفاده کنید."
        );
        document.body.style.display = "none";
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.body.style.display = "block";
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return null;
};

export default ResolutionBlock;
