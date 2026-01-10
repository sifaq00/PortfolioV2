import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Cpu, 
  LayoutGrid, 
  Mail,
  Briefcase,
  Award
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: LayoutGrid },
  { name: "Experiences", href: "#experience", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

import { Download } from "lucide-react";

export const Navbar = () => {
  // Default active ke 'hero' (tanpa # agar cocok dengan id section)
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. LOGIKA SCROLL SPY YANG LEBIH MULUS (IntersectionObserver)
    // Observer ini hanya berjalan saat section masuk/keluar layar, tidak setiap pixel scroll.
    const observerOptions = {
      root: null,
      // Margin diatur agar active state pindah ketika section berada di tengah layar
      rootMargin: "-20% 0px -35% 0px", 
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Pasang observer ke semua section
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // 2. Deteksi scroll hanya untuk mengecilkan navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out",
      isScrolled ? "top-4 scale-95" : "top-8 scale-100"
    )}>
      {/* EFEK GLOW DI BELAKANG NAVBAR (Biur Keren) */}
      <div className="absolute inset-0 -z-10 bg-primary/30 blur-2xl rounded-full opacity-0 animate-fade-in transition-opacity duration-500 group-hover:opacity-100" />

      {/* CONTAINER UTAMA */}
      <div
        className={cn(
          "flex items-center gap-1 p-2 rounded-full border transition-all duration-300",
          "bg-white/90 backdrop-blur-xl border-zinc-100 shadow-lg",
          "dark:bg-black/40 dark:border-white/10 dark:shadow-black/10",
          "max-w-full overflow-x-auto",
          "sm:gap-1 sm:p-2"
        )}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* NAV ITEMS */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none max-w-[80vw] sm:max-w-none">
          {navItems.map((item, key) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth"
                  });
                  setActiveSection(item.href.replace("#", ""));
                }}
                className={cn(
                  "relative flex items-center justify-center h-10 px-4 rounded-full transition-all duration-500 ease-out overflow-hidden group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]"
                    : "text-zinc-600 hover:text-primary hover:bg-primary/10 border border-transparent dark:text-zinc-300 dark:hover:text-primary dark:hover:bg-primary/10"
                )}
                style={{ minWidth: 44 }}
              >
                <Icon
                  size={18}
                  className={cn(
                    "relative z-10 shrink-0 transition-transform duration-300",
                    isActive && "scale-110"
                  )}
                />
                <div
                  className={cn(
                    "grid transition-[grid-template-columns] duration-500 ease-out",
                    isActive ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
                  )}
                >
                  <span className="overflow-hidden whitespace-nowrap text-sm font-medium ml-0 transition-all duration-500">
                    <span className={cn("block", isActive ? "ml-2 opacity-100" : "ml-0 opacity-0")}>{item.name}</span>
                  </span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                )}
              </a>
            );
          })}
        </div>
        {/* Divider */}
        <div className="hidden sm:block h-8 w-px bg-zinc-200 dark:bg-white/10 mx-2" />
        {/* DOWNLOAD CV BUTTON */}
        <a
          href="/assets/cv.pdf"
          download
          className={cn(
            "flex items-center gap-2 h-10 px-4 rounded-full font-semibold border transition-all duration-300",
            "bg-transparent text-primary border-primary/40 hover:bg-primary/10 hover:text-primary hover:border-primary",
            "dark:bg-transparent dark:text-primary dark:border-primary/40 dark:hover:bg-primary/10 dark:hover:text-primary",
            "shadow-none"
          )}
          style={{ textDecoration: "none", minWidth: 44 }}
        >
          <Download size={18} className="shrink-0" />
          <span className="hidden sm:inline">Download CV</span>
        </a>
      </div>
    </nav>
  );
};