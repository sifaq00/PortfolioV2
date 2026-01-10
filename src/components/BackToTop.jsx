import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hitung total scroll height
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      // Hitung persentase (0 - 100)
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Tampilkan tombol jika scroll > 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Kalkulasi lingkaran SVG
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-hidden group",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Back to Top"
    >
      {/* Background Blur & Shadow */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md rounded-full shadow-lg shadow-primary/20 border border-primary/20" />

      {/* Progress Ring SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        {/* Lingkaran track (abu-abu tipis) */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          className="text-muted/30"
        />
        {/* Lingkaran progress (warna primary) */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary transition-all duration-100 ease-out"
        />
      </svg>

      {/* Icon Arrow */}
      <ArrowUp className="relative z-10 w-5 h-5 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
};