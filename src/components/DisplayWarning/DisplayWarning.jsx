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
      <div className="fixed inset-0 flex h-screen items-center justify-center bg-black text-white text-center p-5 z-50">
        <div>
          <p className="text-xl font-bold">
            این سایت هنوز برای گوشی‌های موبایل بهینه‌سازی نشده است!
          </p>
          <p className="mt-2">
            لطفاً از یک دستگاه دسکتاپ یا تبلیت استفاده کنید.
          </p>
        </div>
      </div>
    );
  }
};

export default ResolutionBlock;
