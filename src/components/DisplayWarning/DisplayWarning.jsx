import { useState, useEffect } from "react";

const ResolutionBlock = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280); // اگر عرض صفحه کمتر از 1280 باشد
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // بررسی وضعیت هنگام بارگذاری کامپوننت

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // اگر عرض صفحه کمتر از 1280 باشد، پیغام نمایش داده می‌شود
  if (isMobile) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center p-5 z-50">
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

  // در غیر این صورت، محتوای سایت را نمایش می‌دهیم
  return (
    <div>
      {/* محتوای سایت */}
      <p>سایت در حال نمایش است!</p>
    </div>
  );
};

export default ResolutionBlock;
