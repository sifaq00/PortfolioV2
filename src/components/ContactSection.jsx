import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Briefcase,
  Code,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    emailjs
      .send(
        "service_nqymfun",
        "template_ucqy2tu",
        {
          from_name: form.name.value,
          from_email: form.email.value,
          reply_to: form.email.value || "no-reply@emailjs.com",
          message: form.message.value,
        },
        "ppCtaU12W3rUkgZVy"
      )
      .then(() => {
        toast({
          title: "Message sent",
          description: "Thank you for contacting me. I will respond shortly.",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-28 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Interested in working together or discussing a project?  
          I’m always open to meaningful collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="space-y-12">
            {/* Professional Status */}
            <div className="
              rounded-2xl p-6
              bg-card/60 backdrop-blur
              border border-border
              shadow-lg
            ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Professional Availability
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Available for freelance projects, professional collaborations,
                    and full-time roles in web development and AI-based systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Role Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border">
                <Code className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Web Development</p>
                  <span className="text-xs text-muted-foreground">
                    Frontend & Full-Stack
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border">
                <Cpu className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Machine Learning</p>
                  <span className="text-xs text-muted-foreground">
                    Computer Vision & AI
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <a
                    href="mailto:asysyifaq25@gmail.com"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    asysyifaq25@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <a
                    href="https://wa.me/62895396479427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    0895-3964-79427
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Yogyakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Social */}
            <div>
              <h4 className="font-medium mb-4">Professional Networks</h4>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/sifaq00", icon: Github },
                  { href: "https://www.linkedin.com/in/sifaq00/", icon: Linkedin },
                  { href: "https://instagram.com/sifaq00", icon: Instagram },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-4 rounded-xl
                        bg-card/70 backdrop-blur
                        border border-border
                        text-muted-foreground
                        hover:text-primary
                        hover:border-primary/50
                        hover:shadow-lg hover:shadow-primary/20
                        transition-all duration-300
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="
            bg-card/70 backdrop-blur-xl
            border border-border
            rounded-2xl p-8 md:p-10
            shadow-xl
          ">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background/60 border border-border
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background/60 border border-border
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-background/60 border border-border
                  resize-none
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
