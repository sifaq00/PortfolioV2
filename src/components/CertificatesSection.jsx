import { useState, useRef } from "react";
import { Award, ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  // --- Machine Learning & AI (Coursera) ---
  {
    id: 1,
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/professional-cert/JEBJ3PS4RMDV",
    image: "/certificates/certificate12.jpg",
    tags: ["TensorFlow", "Deep Learning", "Python"]
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/737DRPVYH5AG",
    image: "/certificates/certificate10.jpg",
    tags: ["Machine Learning", "Supervised Learning", "AI"]
  },
  {
    id: 3,
    title: "TensorFlow: Data and Deployment",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/LHPBJ5B4L9XX",
    image: "/certificates/certificate11.jpg",
    tags: ["Deployment", "Data Pipeline", "TensorFlow"]
  },
  {
    id: 4,
    title: "Mathematics for Machine Learning",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/P6GXKL5AD2LE",
    image: "/certificates/certificate9.jpg",
    tags: ["Math", "Linear Algebra", "Statistics"]
  },
  
  // --- Web Development (Dicoding) ---
  {
    id: 5,
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/1RXYQ9QMQZVM",
    image: "/certificates/dicoding1.png",
    tags: ["Web", "Intermediate", "Frontend"]
  },
  {
    id: 6,
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/EYX4KLK75PDL",
    image: "/certificates/dicoding2.png",
    tags: ["Backend", "JavaScript", "Node.js"]
  },
  {
    id: 7,
    title: "Belajar Fundamental Front-End Web",
    issuer: "Dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/1RXYE8JRKZVM",
    image: "/certificates/dicoding3.png",
    tags: ["Frontend", "Web", "Fundamental"]
  },
  {
    id: 8,
    title: "Belajar Membuat Front-End Web Pemula",
    issuer: "Dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/QLZ93MEYMZ5D",
    image: "/certificates/dicoding4.png",
    tags: ["Frontend", "HTML/CSS", "Basic"]
  },

  // --- Foundation & Basic Programming ---
  {
    id: 9,
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/XWYAGBYXHBDV",
    image: "/certificates/certificate1.jpg",
    tags: ["Python", "Programming"]
  },
  {
    id: 10,
    title: "Python & OS Interaction",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/PYPZAS2ZKBCL",
    image: "/certificates/certificate2.jpg",
    tags: ["Python", "OS", "Automation"]
  },
  {
    id: 11,
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/CP2ZU3KJDHBV",
    image: "/certificates/certificate3.jpg",
    tags: ["Data Analytics", "Google"]
  },
  {
    id: 12,
    title: "Process Data from Dirty to Clean",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/PT7FHNFDMXM7",
    image: "/certificates/certificate4.jpg",
    tags: ["Data Cleaning", "SQL"]
  },
  
  // --- Sertifikat Tambahan ---
  {
    id: 13,
    title: "Introduction to Git and GitHub",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/6S6EQLX28G7D",
    image: "/certificates/certificate5.jpg",
    tags: ["Git", "Version Control"]
  },
  {
    id: 14,
    title: "Dasar Pemrograman Pengembang Software",
    issuer: "Dicoding",
    date: "2023",
    link: "https://www.dicoding.com/certificates/EYX46NEM6PDL",
    image: "/certificates/certificate6.jpg",
    tags: ["Programming", "Software Engineering"]
  },
  {
    id: 15,
    title: "Pengenalan ke Logika Pemrograman",
    issuer: "Dicoding",
    date: "2023",
    link: "https://www.dicoding.com/certificates/L4PQQ4DR4PO1",
    image: "/certificates/certificate7.jpg",
    tags: ["Logic", "Algorithm"]
  },
  {
    id: 16,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding",
    date: "2023",
    link: "https://www.dicoding.com/certificates/2VX3O1QWVZYQ",
    image: "/certificates/certificate8.jpg",
    tags: ["Git", "GitHub"]
  },
  {
    id: 17,
    title: "Financial Literacy 101",
    issuer: "Dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/72ZDKNKEVPYW",
    image: "/certificates/financial literaty.png",
    tags: ["Finance", "Soft Skill"]
  },
];

const INITIAL_VISIBLE = 6;

export const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionHeaderRef = useRef(null);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, INITIAL_VISIBLE);

  const handleToggle = () => {
    if (showAll) {
      sectionHeaderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <section
      id="certificates"
      ref={sectionHeaderRef}
      className="py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] -z-10" />
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div ref={sectionHeaderRef} className="text-center mb-16 space-y-4 scroll-mt-32">
          <h2 className="text-4xl md:text-4xl font-bold">
            My <span className="text-primary text-glow">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional certifications and achievements in Web Development, Machine Learning, and Data Science.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleCertificates.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  mass: 0.5
                }}
                key={cert.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image Container */}
                {/* Ubah bg-secondary/20 menjadi bg-black/80 agar gambar lebih kontras */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40 p-4 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    // Mengubah object-cover menjadi object-contain agar gambar full
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Action Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-background/80 backdrop-blur text-primary border border-primary/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white shadow-lg"
                    title="Verify Certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 gap-3 relative">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {cert.tags?.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE CLICKABLE */}
                  <h3>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-lg leading-tight text-foreground line-clamp-2 hover:text-primary transition-colors hover:underline decoration-primary/50 underline-offset-4"
                    >
                      {cert.title}
                    </a>
                  </h3>

                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Award size={14} className="text-primary" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1.5 bg-secondary/50 px-2 py-0.5 rounded text-xs">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {certificates.length > INITIAL_VISIBLE && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleToggle}
              className="group relative px-8 py-3 rounded-full bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/50 text-foreground transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 font-medium flex items-center gap-2">
                {showAll ? "Show Less" : `View ${certificates.length - INITIAL_VISIBLE} More Certificates`}
                {showAll ? (
                  <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                )}
              </span>
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};