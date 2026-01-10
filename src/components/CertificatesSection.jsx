import { useState } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/professional-cert/JEBJ3PS4RMDV",
    image: "/certificates/certificate12.jpg",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/737DRPVYH5AG",
    image: "/certificates/certificate10.jpg",
  },
  {
    id: 3,
    title: "TensorFlow: Data and Deployment",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/LHPBJ5B4L9XX",
    image: "/certificates/certificate11.jpg",
  },
  {
    id: 4,
    title: "Mathematics for Machine Learning and Data Science",
    issuer: "Coursera",
    date: "2023",
    link: "https://coursera.org/verify/specialization/P6GXKL5AD2LE",
    image: "/certificates/certificate9.jpg",
  },
  {
    id: 5,
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/1RXYQ9QMQZVM",
    image: "/certificates/dicoding1.png",
  },
  {
    id: 6,
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/EYX4KLK75PDL",
    image: "/certificates/dicoding2.png",
  },
  {
    id: 7,
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/1RXYE8JRKZVM",
    image: "/certificates/dicoding3.png",
  },
  {
    id: 8,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "dicoding",
    date: "2025",
    link: "https://www.dicoding.com/certificates/QLZ93MEYMZ5D",
    image: "/certificates/dicoding4.png",
  },
  {
    id: 9,
    title: "Crash Course on Python",
    issuer: "coursera",
    date: "2023",
    link: "https://coursera.org/verify/XWYAGBYXHBDV",
    image: "/certificates/certificate1.jpg",
  },
  {
    id: 10,
    title: "Using Python to Interact with the Operating System",
    issuer: "coursera",
    date: "2023",
    link: "https://coursera.org/verify/PYPZAS2ZKBCL",
    image: "/certificates/certificate2.jpg",
  },
  {
    id: 11,
    title: "Foundations: Data, Data, Everywhere",
    issuer: "coursera",
    date: "2023",
    link: "https://coursera.org/verify/CP2ZU3KJDHBV",
    image: "/certificates/certificate3.jpg",
  },
  {
    id: 12,
    title: "Process Data from Dirty to Clean",
    issuer: "coursera",
    date: "2023",
    link: "https://coursera.org/verify/PT7FHNFDMXM7",
    image: "/certificates/certificate4.jpg",
  },
];

const INITIAL_VISIBLE = 6;

export const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, INITIAL_VISIBLE);

  return (
    <section id="certificates" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleCertificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-card/40 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_80px_-20px_rgba(99,102,241,0.45)]"
            >
              {/* IMAGE */}
              <div className="relative h-64 bg-black/40 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />

                <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
                  <Award className="w-14 h-14 text-primary/50" />
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition hover:bg-primary"
                  title="View Credential"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-3">
                <span className="text-xs font-semibold px-3 py-1 w-fit rounded-full bg-primary/10 text-primary">
                  {cert.issuer}
                </span>

                {/* 🔥 TITLE CLICKABLE */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-lg leading-snug text-foreground hover:text-primary hover:underline underline-offset-4 transition-colors flex items-center gap-2"
                >
                  {cert.title}
                  <ExternalLink size={14} className="opacity-60" />
                </a>

                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 mt-auto border-t border-border/40">
                  <Calendar size={14} />
                  <span>Issued {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certificates.length > INITIAL_VISIBLE && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-full border border-primary text-primary text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300 shadow-lg shadow-primary/20"
            >
              {showAll ? "Show Less" : "View All Certificates"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};