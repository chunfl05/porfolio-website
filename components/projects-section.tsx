import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "EduHear — Audio-First Learning Platform",
    description:
      "Led database schema design and end-to-end product development for an audio-learning platform serving students, instructors, and institutions. Wrote multi-table SQL queries and reusable views to power role-specific dashboards tracking engagement, completion rates, and listening progress.",
    tools: ["SQL", "Database Design", "Dashboards", "Product Strategy"],
    href: "/projects/eduhear",
  },
  {
    title: "Washington State Library — Marketing to Adult Learners",
    description:
      "Analyzed 30–50 WA job postings across IT, Healthcare, and Admin sectors and built structured datasets on certifications, wages, and regional demand. Built Tableau dashboards on certification demand and redesigned the library's website UI/UX in Figma based on usability testing with 100+ adult learners.",
    tools: ["Tableau", "Figma", "Market Research", "UX Research"],
    href: "/projects/washington-state-library",
  },
  {
    title: "China Telecom — AI Proposals & Drone Dashboard",
    description:
      "Wrote AI module proposals for an education cloud product. Contributed to a drone dashboard with route tracking and improved data visualization. Practiced translating technical concepts for business stakeholders.",
    tools: ["Proposal Writing", "Dashboard Design", "Data Visualization"],
    href: "/projects/china-telecom",
  },
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
