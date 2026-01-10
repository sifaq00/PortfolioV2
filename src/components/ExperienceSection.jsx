import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import PropTypes from "prop-types";

const experiences = [
	{
		id: 1,
		role: "Machine Learning Cohort",
		company: "Bangkit Academy by Google, GoTo, & Traveloka",
		location: "Remote / Coursera & Dicoding",
		date: "2023",
		description:
			"Selected as a Machine Learning cohort. Built an AI model for the 'Pet Rescue' application as a capstone project using TensorFlow for animal classification.",
		tech: ["Machine Learning", "TensorFlow", "Python", "Deep Learning"],
		image: "/experience/bangkit.png",
	},
	{
		id: 2,
		role: "Frontend & Backend Developer",
		company: "Coding Camp by DBS Foundation",
		location: "Online / Dicoding",
		date: "2025",
		description:
			"Developed modern full-stack web applications, covering interactive frontend interfaces and scalable backend architecture following industry standards.",
		tech: ["React", "Node.js", "Hapi.js", "REST API"],
		image: "/experience/codingcamp.png",
	},
	{
		id: 3,
		role: "Fullstack Developer Intern",
		company: "Sekolah Tumbuh",
		location: "Yogyakarta, Indonesia",
		date: "2025",
		description:
			"Worked on Laravel-based school website development, handling database integration and user-facing interfaces for operational systems.",
		tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
		image: "/experience/tumbuh.png",
	},
];

const ExperienceCard = ({ exp, index }) => {
	return (
		<div
			className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
				index % 2 === 0 ? "md:flex-row-reverse" : ""
			}`}
		>
			{/* Timeline Node */}
			<div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-10 z-20">
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ type: "spring", stiffness: 200, damping: 12 }}
					className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_16px_rgba(var(--primary),0.6)]"
				/>
			</div>

			<div className="hidden md:block flex-1" />

			{/* CARD */}
			<motion.div
				initial={{ opacity: 0, y: 60, rotateX: 8 }}
				whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="flex-1 ml-10 md:ml-0"
			>
				<div
					className="
            group relative rounded-3xl overflow-hidden transition-all duration-700
            bg-white/80 dark:bg-card/40
            border border-border/60 dark:border-white/10
            shadow-md dark:shadow-none
            hover:shadow-[0_30px_120px_-30px_rgba(99,102,241,0.35)]
          "
				>
					{/* IMAGE — FIXED RATIO 1300x520 */}
					<div className="relative w-full px-5 pt-5">
						<div
							className="
                aspect-[1300/520]
                overflow-hidden rounded-2xl
                bg-muted/60 dark:bg-background/60
              "
						>
							<motion.img
								src={exp.image}
								alt={exp.company}
								initial={{ scale: 1.03 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 1.2, ease: "easeOut" }}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* CONTENT */}
					<div className="relative p-6 sm:p-8">
						<div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
							<span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 dark:bg-background/60 border border-border/50 dark:border-white/5">
								<Calendar size={12} className="text-primary" />
								{exp.date}
							</span>
							<span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 dark:bg-background/60 border border-border/50 dark:border-white/5">
								<MapPin size={12} className="text-primary" />
								{exp.location}
							</span>
						</div>

						<h3 className="text-lg sm:text-xl font-bold mb-1 transition-colors group-hover:text-primary">
							{exp.role}
						</h3>

						<div className="flex items-center gap-2 text-sm text-foreground/80 mb-4">
							<Building2 size={16} className="text-primary/70" />
							{exp.company}
						</div>

						<p className="text-sm text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
							{exp.description}
						</p>

						<div className="flex flex-wrap gap-2">
							{exp.tech.map((tech, idx) => (
								<span
									key={idx}
									className="
                    px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-md
                    bg-primary/10 text-primary
                    border border-primary/20
                    transition group-hover:bg-primary/15
                  "
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

ExperienceCard.propTypes = {
	exp: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

export const ExperienceSection = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<section
			id="experience"
			className="py-24 sm:py-28 px-4 relative overflow-hidden"
		>
			<div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20 sm:mb-24"
				>
					<h2 className="text-3xl sm:text-4xl font-bold">
						My{" "}
						<span className="text-primary">Experience</span>
					</h2>
					<p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
						A curated timeline of my professional journey, internships, and
						intensive programs.
					</p>
				</motion.div>

				<div ref={containerRef} className="relative">
					<div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/40">
						<motion.div
							style={{ height }}
							className="w-full bg-gradient-to-b from-primary via-purple-500 to-blue-500"
						/>
					</div>

					<div className="space-y-10 sm:space-y-24 max-sm:px-2">
						{experiences.map((exp, index) => (
							<ExperienceCard key={exp.id} exp={exp} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
