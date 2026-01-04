import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">
          
          {/* --- BAGIAN FOTO PROFIL (UPDATED) --- */}
          <div className="mb-4 opacity-0 animate-fade-in">
            <div className="relative inline-block">
              {/* Efek glow diganti jadi gradasi Primary ke Cyan (lebih segar/techy) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-200 rounded-full blur opacity-40 animate-pulse-subtle"></div>
              
           
              <img 
                src="/profile/profile.png" 
                alt="Muhammad Asifaq" 
                className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-background object-cover shadow-2xl"
              />
            </div>
          </div>
          {/* ------------------------- */}

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Muhammad
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              Asifaq
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            A dedicated <span className="text-foreground font-medium">Web Developer</span> and <span className="text-foreground font-medium">Machine Learning Enthusiast</span>. 
            I build dynamic web applications and explore AI solutions to solve real-world problems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};