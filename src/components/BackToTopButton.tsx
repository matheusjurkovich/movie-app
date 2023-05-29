"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="animate-fade-in fixed bottom-8 right-8 rounded-full bg-blue-500 p-2 text-white transition-opacity hover:bg-blue-600"
          onClick={handleBackToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
