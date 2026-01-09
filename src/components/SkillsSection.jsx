import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, 
  Server, 
  Brain, 
  Wrench,
  Sparkles,
  FileCode,
  Zap,
  Atom,
  Wind,
  LayoutGrid,
  Hexagon,
  Database,
  Flame,
  Leaf,
  Link,
  Plug,
  Terminal,
  Eye,
  BrainCircuit,
  Image,
  Hand,
  NotebookPen,
  GitBranch,
  Monitor,
  Send,
  PenTool,
  Cloud
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend", icon: FileCode },
  { name: "JavaScript", level: 88, category: "frontend", icon: Zap },
  { name: "React", level: 85, category: "frontend", icon: Atom },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: Wind },
  { name: "Bootstrap", level: 80, category: "frontend", icon: LayoutGrid },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: Hexagon },
  { name: "Express.js", level: 78, category: "backend", icon: Server },
  { name: "PHP Native", level: 82, category: "backend", icon: Code2 },
  { name: "Laravel", level: 80, category: "backend", icon: Flame },
  { name: "MongoDB", level: 75, category: "backend", icon: Leaf },
  { name: "MySQL", level: 80, category: "backend", icon: Database },
  { name: "REST API", level: 85, category: "backend", icon: Link },
  { name: "WebSocket", level: 75, category: "backend", icon: Plug },

  // Machine Learning
  { name: "Python", level: 82, category: "ml", icon: Terminal },
  { name: "YOLO", level: 80, category: "ml", icon: Eye },
  { name: "TensorFlow", level: 72, category: "ml", icon: BrainCircuit },
  { name: "CNN", level: 75, category: "ml", icon: Image },
  { name: "MediaPipe", level: 78, category: "ml", icon: Hand },
  { name: "Jupyter Notebook", level: 80, category: "ml", icon: NotebookPen },

  // Tools
  { name: "Git/GitHub", level: 88, category: "tools", icon: GitBranch },
  { name: "VS Code", level: 92, category: "tools", icon: Monitor },
  { name: "Postman", level: 85, category: "tools", icon: Send },
  { name: "Figma", level: 70, category: "tools", icon: PenTool },
  { name: "Laragon", level: 85, category: "tools", icon: Server },
  { name: "Google Colab", level: 80, category: "tools", icon: Cloud },
];

const categories = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "ml", label: "Machine Learning", icon: Brain },
  { id: "tools", label: "Tools", icon: Wrench },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getGradient = (category) => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-cyan-400";
      case "backend":
        return "from-green-500 to-emerald-400";
      case "ml":
        return "from-purple-500 to-pink-400";
      case "tools":
        return "from-orange-500 to-yellow-400";
      default:
        return "from-primary to-primary/70";
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground hover:scale-105"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-5 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-2 rounded-lg bg-gradient-to-br",
                  skill.category === "frontend" && "from-blue-500/20 to-cyan-400/20",
                  skill.category === "backend" && "from-green-500/20 to-emerald-400/20",
                  skill.category === "ml" && "from-purple-500/20 to-pink-400/20",
                  skill.category === "tools" && "from-orange-500/20 to-yellow-400/20"
                )}>
                  <skill.icon className={cn(
                    "w-5 h-5",
                    skill.category === "frontend" && "text-cyan-400",
                    skill.category === "backend" && "text-emerald-400",
                    skill.category === "ml" && "text-purple-400",
                    skill.category === "tools" && "text-orange-400"
                  )} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category === "ml" ? "Machine Learning" : skill.category}
                  </span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r transition-all duration-500 group-hover:shadow-lg",
                    getGradient(skill.category)
                  )}
                  style={{ 
                    width: skill.level + "%",
                    animation: "grow 1.5s ease-out"
                  }}
                />
              </div>

              {/* Hover Glow Effect */}
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r blur-xl -z-10",
                getGradient(skill.category)
              )} style={{ opacity: 0.1 }} />
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Frontend", count: skills.filter(s => s.category === "frontend").length, color: "from-blue-500 to-cyan-400" },
            { label: "Backend", count: skills.filter(s => s.category === "backend").length, color: "from-green-500 to-emerald-400" },
            { label: "ML & AI", count: skills.filter(s => s.category === "ml").length, color: "from-purple-500 to-pink-400" },
            { label: "Tools", count: skills.filter(s => s.category === "tools").length, color: "from-orange-500 to-yellow-400" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
              <div className={cn("text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent", stat.color)}>
                {stat.count}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label} Skills</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
