import { useState, useEffect } from "react";

const ResolutionBlock = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopMode =
        window.innerWidth >= 1280 &&
        window.navigator.userAgent.includes("Macintosh");
      setIsBlocked(!isDesktopMode);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isBlocked) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center p-5 z-50">
        <div>
          <p className="text-xl font-bold">
            این سایت فقط در حالت دسکتاپ قابل استفاده است!
          </p>
          <p className="mt-2">
            لطفاً <span className="text-red-500 font-bold">Desktop Mode</span>{" "}
            را در مرورگر خود فعال کنید.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>سایت در حال نمایش است!</p>
    </div>
  );
};

export default ResolutionBlock;
