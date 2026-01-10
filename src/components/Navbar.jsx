import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Cpu, 
  LayoutGrid, 
  Mail,
  Award
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: LayoutGrid },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

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
      <div className={cn(
        "flex items-center gap-1 p-2 rounded-full border transition-all duration-300",
        // Style Glassmorphism Dark/Light Mode yang lebih solid
        "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/10",
        "dark:bg-black/40 dark:border-white/10"
      )}>
        
        {navItems.map((item, key) => {
          const Icon = item.icon;
          // Cek active state (handling dengan atau tanpa #)
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); // Mencegah lompatan kasar
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth"
                });
                setActiveSection(item.href.replace("#", ""));
              }}
              className={cn(
                "relative flex items-center justify-center h-10 px-4 rounded-full transition-all duration-500 ease-out overflow-hidden group",
                // Warna Active vs Inactive
                isActive 
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
              )}
            >
              {/* Ikon */}
              <Icon 
                size={18} 
                className={cn(
                  "relative z-10 shrink-0 transition-transform duration-300",
                  isActive && "scale-110"
                )} 
              />

              {/* Teks dengan Animasi Grid (Anti Patah-patah) */}
              <div 
                className={cn(
                  "grid transition-[grid-template-columns] duration-500 ease-out",
                  isActive ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
                )}
              >
                <span className="overflow-hidden whitespace-nowrap text-sm font-medium ml-0 transition-all duration-500">
                  {/* Margin left hanya diberi jika aktif agar transisi mulus */}
                  <span className={cn("block", isActive ? "ml-2 opacity-100" : "ml-0 opacity-0")}>
                    {item.name}
                  </span>
                </span>
              </div>

              {/* Efek Kilau (Shine) saat Active */}
              {isActive && (
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};