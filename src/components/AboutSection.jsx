import { Briefcase, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Machine Learning Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a developer based in Indonesia with a strong focus on 
              <strong> Web Development</strong> and <strong>Machine Learning</strong>. 
              I actively build real-world applications ranging from full-stack web systems 
              to AI-powered solutions.
            </p>

            <p className="text-muted-foreground">
              My experience includes developing web applications using 
              <strong> PHP (Native & Laravel)</strong>, <strong>JavaScript</strong>, 
              and <strong>React</strong>, as well as building Machine Learning projects such as 
              <strong> BISINDO sign language detection using YOLO</strong>, 
              <strong> real-time WebSocket-based AI systems</strong>, 
              and <strong> CNN-based image classification</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack applications using PHP (Native & Laravel), 
                    JavaScript, React, REST API, and WebSocket.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
                    Developing AI systems using YOLO, CNN, and MediaPipe for 
                    sign language detection, image classification, and real-time inference.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience through multiple academic and personal projects, 
                    including BISINDO AI systems, weather prediction apps, 
                    and various web-based platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
