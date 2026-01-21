import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Dubloo — Restroom Accessibility Platform",
    description:
      "Built interactive sorting and filtering for a restroom accessibility web app. Improved mobile responsiveness and collaborated to resolve UI disagreements. Used multi-factor scoring to surface the most relevant accessibility information.",
    tools: ["JavaScript", "CSS", "Responsive Design", "UI/UX"],
    href: "/projects/dubloo",
  },
  {
    title: "Healthcare Disparities Analysis",
    description:
      "Analyzed a large healthcare dataset to identify disparities in access and outcomes across populations. Used feature engineering, statistical testing (t-test, ANOVA), and visualization to communicate findings clearly.",
    tools: ["Python", "pandas", "Statistical Testing", "Data Visualization"],
    href: "/projects/healthcare",
  },
  {
    title: "China Telecom — AI Proposals & Drone Dashboard",
    description:
      "Wrote AI module proposals for an education cloud product. Contributed to a drone dashboard with route tracking and improved data visualization. Practiced translating technical concepts for business stakeholders.",
    tools: ["Proposal Writing", "Dashboard Design", "Data Visualization"],
    href: "/projects/china-telecom",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-highlight lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="group/list space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
