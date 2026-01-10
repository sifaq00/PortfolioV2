import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Phone, // Mengganti Mail dengan Phone
  Code2, 
  Brain, 
  Terminal, 
  Sparkles 
} from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-5xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT COLUMN: TEXT & INTRO --- */}
        <div className="text-center md:text-left order-2 md:order-1 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for Work</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 animate-fade-in-delay-1">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-delay-2">
              <span className="block text-foreground">Muhammad</span>
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Asifaq
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-delay-3">
            A creative <b>Full-Stack Developer</b> & <b>Machine Learning Engineer</b>. 
            I bridge the gap between complex AI systems and intuitive web experiences, 
            building digital products that are both smart and beautiful.
          </p>

          {/* Social Links & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 animate-fade-in-delay-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              View My Work
            </a>
            
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/sifaq00", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-asifaq/", label: "LinkedIn" },
                { icon: Phone, href: "https://wa.me/62895396479427", label: "WhatsApp" }, 
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

        {/* --- RIGHT COLUMN: IMAGE & FLOATING ICONS --- */}
        <div className="order-1 md:order-2 flex justify-center relative animate-fade-in">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};