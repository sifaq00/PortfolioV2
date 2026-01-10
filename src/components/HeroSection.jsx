import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Code2, 
  Brain, 
  Terminal, 
  Sparkles 
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-2 md:px-8 pt-20"
    >
      <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-sm:px-2">
        
        {/* --- LEFT COLUMN: TEXT & INTRO --- */}
        <div className="text-center md:text-left order-2 md:order-1 space-y-6 max-sm:space-y-4 max-sm:px-2">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              Available for Work
               
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 animate-fade-in-delay-1">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-delay-2 flex flex-row flex-nowrap items-center gap-x-3 justify-center md:justify-start w-full leading-normal md:leading-tight lg:leading-tight">
              <span className="text-foreground">Muhammad</span>
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Asifaq
              </span>
            </h1>
            {/* Animated, lively description with creative typography */}
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base md:text-lg text-center md:text-left">
              <span className="font-bold text-primary text-base md:text-lg tracking-wide animate-pulse">A creative Full-Stack Developer</span>
              <span className="mx-2 text-lg md:text-xl font-extrabold text-gradient bg-gradient-to-r from-cyan-400 via-primary to-blue-500 bg-clip-text text-transparent animate-gradient-text">&</span>
              <span className="font-bold text-blue-500 text-base md:text-lg tracking-wide animate-pulse">Machine Learning Engineer</span>
              <br className="hidden md:block" />
              <span className="block mt-2 text-sm md:text-base font-medium text-foreground/80 leading-relaxed animate-fade-in-delay-3">
                I bridge the gap between <span className="font-semibold text-primary">complex AI systems</span> and <span className="font-semibold text-blue-500">intuitive web experiences</span>, building digital products that are both <span className="italic text-primary">smart</span> and <span className="italic text-blue-500">beautiful</span>.
              </span>
            </p>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 animate-fade-in-delay-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              View My Work
            </a>
            
            <div className="flex items-center gap-3">
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
                    className="p-3 rounded-full border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: PROFILE IMAGE & FLOATING ICONS --- */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Main Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-subtle" />
            
            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full border-2 border-primary/20 p-2 bg-background/30 backdrop-blur-xs">
              <img 
                src="/profile/profile.png" 
                alt="Muhammad Asifaq" 
                className="w-full h-full rounded-full object-cover border border-primary/10 shadow-2xl"
              />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -left-4 p-3 bg-card rounded-2xl border border-border shadow-lg animate-float" style={{ animationDelay: "0s" }}>
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>

            <div className="absolute bottom-8 -right-6 p-3 bg-card rounded-2xl border border-border shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <Brain className="w-6 h-6 text-purple-400" />
            </div>

            <div className="absolute top-10 -right-8 p-3 bg-card rounded-2xl border border-border shadow-lg animate-float" style={{ animationDelay: "3s" }}>
              <Terminal className="w-6 h-6 text-green-400" />
            </div>

             {/* Decor: Sparkle */}
             <div className="absolute -bottom-2 left-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-yellow-300 opacity-80" />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator - now placed below social icons on mobile */}
      <div className="block md:hidden w-full flex flex-col items-center mt-6 mb-2">
        <span className="text-xs text-muted-foreground mb-2">SCROLL</span>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
      {/* Desktop scroll indicator remains at bottom */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex-col items-center pointer-events-none select-none">
        <span className="text-xs text-muted-foreground mb-2">SCROLL</span>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) 0.5s both;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2s infinite;
          display: inline-block;
        }
        @keyframes gradient-text {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};