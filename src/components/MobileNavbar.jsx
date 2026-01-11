import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Cpu,
  LayoutGrid,
  Mail,
  Briefcase,
  Award,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: LayoutGrid },
  { name: "Experiences", href: "#experience", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const MobileNavbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.1,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-2 py-1",
        "bg-white/90 backdrop-blur-xl border-b border-zinc-200 shadow-lg",
        "dark:bg-black/60 dark:border-white/10 dark:shadow-black/10",
        "flex items-center justify-between gap-1 rounded-b-2xl"
      )}
    >
      <div className="flex items-center justify-between w-full overflow-x-auto scrollbar-none">
        {navItems.map((item, key) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <a
              key={key}
              href={item.href}
              onClick={e => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(item.href.replace("#", ""));
              }}
              className={cn(
                "flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-primary"
              )}
              style={{ minWidth: 40 }}
            >
              <Icon size={22} className="mb-0.5" />
            </a>
          );
        })}
        {/* Download CV button */}
        <a
          href="/assets/cv.pdf"
          download
          className={cn(
            "flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-all duration-300 text-primary",
            "hover:bg-primary/10"
          )}
          style={{ minWidth: 40 }}
        >
          <Download size={22} />
        </a>
      </div>
    </nav>
  );
};
