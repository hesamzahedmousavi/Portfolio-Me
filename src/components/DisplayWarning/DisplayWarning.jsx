import { useState, useEffect } from "react";

const ResolutionBlock = () => {
  const [isBlocked, setIsBlocked] = useState(
    window.innerWidth < 1280 &&
      !window.navigator.userAgent.includes("Macintosh")
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBlocked(
        window.innerWidth < 1280 &&
          !window.navigator.userAgent.includes("Macintosh")
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isBlocked) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center p-5 z-50">
      <div>
        <p className="text-xl font-bold">
          این سایت فقط در حالت دسکتاپ قابل استفاده است!
        </p>
        <p className="mt-2">
          لطفاً <span className="text-red-500 font-bold">Desktop Mode</span> را
          در مرورگر خود فعال کنید.
        </p>
      </div>
    </div>
  );
};

export default ResolutionBlock;
