import { ArrowUp } from "@phosphor-icons/react";
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
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full animate-fade-in transition-opacity"
          onClick={handleBackToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
