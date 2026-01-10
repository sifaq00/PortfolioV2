import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "BISINDO YOLO Mediapipe",
		description:
			"Frontend untuk deteksi bahasa isyarat BISINDO menggunakan YOLO dan MediaPipe.",
		image: "/projects/bisindo.png",
		tags: ["Frontend", "React", "YOLO", "MediaPipe"],
		demoUrl: "https://bisindo-detection.asiff.live",
		githubUrl: "https://github.com/sifaq00/BISINDO-YOLO-MEDIAPIPE-DEV",
		category: "frontend",
	},
	{
		id: 2,
		title: "BISINDO YOLO WebSocket",
		description:
			"Backend real-time AI BISINDO dengan WebSocket dan Python.",
		image: "/projects/bisindo2.png",
		tags: ["Backend", "Python", "WebSocket", "YOLO"],
		demoUrl: "https://bisindo-detection.asiff.live",
		githubUrl: "https://github.com/sifaq00/BISINDO-YOLO-WEBSOCKET",
		category: "backend",
	},
	{
		id: 3,
		title: "Weather Prediction App",
		description:
			"Aplikasi prediksi cuaca dengan ML, frontend React dan backend Python.",
		image: "/projects/weather.png",
		tags: ["Frontend", "Backend", "React", "Python", "ML"],
		demoUrl: "https://prediksi-cuaca.asiff.live",
		githubUrl: "https://github.com/sifaq00/Weather-Prediction-Frontend",
		githubUrl2: "https://github.com/sifaq00/Weather-Prediction-Backend",
		category: "fullstack",
	},
	{
		id: 4,
		title: "DSFagency MERN",
		description:
			"Platform agency dengan stack MERN, frontend dan backend terpisah.",
		image: "/projects/agency2.png",
		tags: [
			"Frontend",
			"Backend",
			"MERN",
			"MongoDB",
			"Express",
			"React",
			"Node.js",
		],
		demoUrl: "https://dsf-agency.asiff.live",
		githubUrl: "https://github.com/sifaq00/DSFagency-frontendMERN",
		githubUrl2: "https://github.com/sifaq00/DSFagency-backendMERN",
		category: "fullstack",
	},
	{
		id: 5,
		title: "Thas Laravel",
		description: "Website sekolah hospitality dengan Laravel.",
		image: "/projects/thas.png",
		tags: ["Backend", "Laravel", "PHP"],
		demoUrl: "https://hospitalityartsschool.asiff.live",
		githubUrl: "https://github.com/sifaq00/thas-laravel",
		category: "backend",
	},
	{
		id: 6,
		title: "StoryHub",
		description: "Platform berbagi cerita, social media sederhana.",
		image: "/projects/storyhub.png",
		tags: ["Frontend", "React", "Social"],
		demoUrl: "https://storyhub.asiff.live",
		githubUrl: "https://github.com/sifaq00/storyHub",
		category: "frontend",
	},
	{
		id: 7,
		title: "Pet Rescue Bangkit",
		description: "Aplikasi Android capstone Bangkit untuk adopsi hewan.",
		image: "/projects/petrescue.png",
		tags: ["Android", "Bangkit", "Capstone"],
		demoUrl: "#",
		githubUrl: "https://github.com/sifaq00/Pet-Rescue-CH2-PS354-Bangkit",
		category: "android",
	},
	{
		id: 8,
		title: "Madrasah Website",
		description:
			"Single Page Application profil madrasah dengan React & Vite.",
		image: "/projects/madrasah.png",
		tags: ["Frontend", "React", "Vite"],
		demoUrl: "https://mabdaulhuda.asiff.live/",
		githubUrl: "https://github.com/sifaq00/madrasah",
		category: "frontend",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					Featured{" "}
					<span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully
					crafted with attention to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-gradient-to-br from-secondary/60 to-card/80 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/30 card-hover border border-border/30 transition-all duration-300 hover:-translate-y-1"
						>
							<div className="h-48 overflow-hidden relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<span
									className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full shadow-md ${
										project.category === "frontend"
											? "bg-blue-500/80 text-white"
											: project.category === "backend"
											? "bg-green-500/80 text-white"
											: project.category === "fullstack"
											? "bg-purple-500/80 text-white"
											: project.category === "android"
											? "bg-orange-500/80 text-white"
											: "bg-secondary/80 text-foreground"
									}`}
								>
									{
										project.category.charAt(0).toUpperCase() +
										project.category.slice(1)
									}
								</span>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										{project.demoUrl && project.demoUrl !== "#" && (
											<a
												href={project.demoUrl}
												target="_blank"
												className="text-foreground/80 hover:text-primary transition-colors duration-300"
												title="Live Demo"
											>
												<ExternalLink size={20} />
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												className="text-foreground/80 hover:text-primary transition-colors duration-300"
												title="Frontend/Repo"
											>
												<Github size={20} />
											</a>
										)}
										{project.githubUrl2 && (
											<a
												href={project.githubUrl2}
												target="_blank"
												className="text-foreground/80 hover:text-green-500 transition-colors duration-300"
												title="Backend/Repo"
											>
												<Github size={20} />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/sifaq00"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
