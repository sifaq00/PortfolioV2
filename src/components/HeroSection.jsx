import { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Code2,
  Brain,
  Terminal,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const roles = ["Full-Stack Developer", "Machine Learning Engineer", "AI Enthusiast"];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 overflow-hidden"
    >
      {/* Ambient Background Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* --- LEFT COLUMN: TEXT & INTRO --- */}
        <div className="text-center md:text-left order-2 md:order-1 space-y-7">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card/60 border border-primary/15 backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-foreground/60 tracking-wide uppercase">
              Available for Work
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <p className="text-sm md:text-base font-medium text-foreground/50 tracking-widest uppercase animate-fade-in-delay-1">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in-delay-2 leading-[1.1] whitespace-nowrap">
              <span className="text-foreground">Muhammad </span>
              <span className="hero-name-gradient">Asifaq</span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-8 md:h-10 flex items-center justify-center md:justify-start animate-fade-in-delay-3">
              <span className="text-lg md:text-xl font-mono font-medium text-primary/90">
                {displayed}
                <span className="hero-cursor">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/55 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed animate-fade-in-delay-3">
              I bridge the gap between complex AI systems and intuitive web experiences — building digital products that are both smart and beautiful.
            </p>
          </div>

          {/* CTA & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-1 animate-fade-in-delay-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button group w-full sm:w-auto flex items-center justify-center gap-2">
              View My Work
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-border/50 text-foreground/70 font-medium text-sm hover:border-primary/40 hover:text-primary transition-all duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 justify-center md:justify-start animate-fade-in-delay-4">
            {[
              { icon: Github, href: "https://github.com/sifaq00", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-asifaq/", label: "LinkedIn" },
              { icon: SiWhatsapp, href: "https://wa.me/62895396479427", label: "WhatsApp" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm text-foreground/40 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT COLUMN: PROFILE IMAGE & FLOATING ICONS --- */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center w-full">
          <div className="relative w-64 h-64 md:w-[340px] md:h-[340px]">
            {/* Rotating ring */}
            <div className="hero-ring" />

            {/* Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-primary/25 to-blue-500/20 rounded-full blur-3xl animate-pulse-subtle" />
            
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/15 shadow-2xl shadow-primary/10">
                <img 
                  src="/profile/profile2.png" 
                  alt="Muhammad Asifaq" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-3 -left-3 p-3 bg-card/80 backdrop-blur-md rounded-2xl border border-border/40 shadow-xl animate-float" style={{ animationDelay: "0s" }}>
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>

            <div className="absolute bottom-10 -right-5 p-3 bg-card/80 backdrop-blur-md rounded-2xl border border-border/40 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <Brain className="w-5 h-5 text-purple-400" />
            </div>

            <div className="absolute top-12 -right-7 p-3 bg-card/80 backdrop-blur-md rounded-2xl border border-border/40 shadow-xl animate-float" style={{ animationDelay: "3s" }}>
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>

            <div className="absolute -bottom-1 left-6 p-2 bg-card/80 backdrop-blur-md rounded-xl border border-border/40 shadow-xl animate-float" style={{ animationDelay: "4.5s" }}>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile */}
      <div className="block md:hidden w-full flex flex-col items-center mt-8 mb-2">
        <span className="text-[10px] text-foreground/30 mb-1.5 tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary/60 animate-bounce" />
      </div>

      {/* Scroll Indicator - Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex-col items-center pointer-events-none select-none">
        <span className="text-[10px] text-foreground/30 mb-1.5 tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary/60 animate-bounce" />
      </div>

      <style>{`
        .hero-name-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, #67e8f9 50%, #3b82f6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero-gradient-shift 6s ease-in-out infinite;
        }

        @keyframes hero-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-cursor {
          font-weight: 100;
          animation: hero-blink 1s step-end infinite;
          color: hsl(var(--primary));
        }

        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-ring {
          position: absolute;
          inset: -8px;
          border-radius: 9999px;
          border: 1px dashed hsl(var(--primary) / 0.2);
          animation: hero-spin 30s linear infinite;
        }

        @keyframes hero-spin {
          to { transform: rotate(360deg); }
        }

        .hero-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }
        .hero-orb-1 {
          width: 400px; height: 400px;
          background: hsl(var(--primary));
          top: 10%; left: -5%;
          animation: hero-orb-drift 12s ease-in-out infinite alternate;
        }
        .hero-orb-2 {
          width: 300px; height: 300px;
          background: #3b82f6;
          bottom: 10%; right: -5%;
          animation: hero-orb-drift 15s ease-in-out infinite alternate-reverse;
        }
        .hero-orb-3 {
          width: 200px; height: 200px;
          background: #a855f7;
          top: 50%; left: 40%;
          animation: hero-orb-drift 10s ease-in-out infinite alternate;
        }

        @keyframes hero-orb-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, -20px); }
        }
      `}</style>
    </section>
  );
};