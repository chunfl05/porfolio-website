import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Dubloo — Restroom Accessibility Platform",
    description:
      "Built interactive sorting and filtering for a restroom accessibility web app. Improved mobile responsiveness and collaborated to resolve UI disagreements. Used multi-factor scoring to surface the most relevant accessibility information.",
    tools: ["JavaScript", "CSS", "Responsive Design", "UI/UX"],
    href: "/projects/dubloo",
    featured: true,
  },
  {
    title: "Healthcare Disparities Analysis",
    description:
      "Analyzed a large healthcare dataset to identify disparities in access and outcomes across populations. Used feature engineering, statistical testing (t-test, ANOVA), and visualization to communicate findings clearly.",
    tools: ["Python", "pandas", "Statistical Testing", "Data Visualization"],
    href: "/projects/healthcare",
    featured: true,
  },
  {
    title: "China Telecom — AI Proposals & Drone Dashboard",
    description:
      "Wrote AI module proposals for an education cloud product. Contributed to a drone dashboard with route tracking and improved data visualization. Practiced translating technical concepts for business stakeholders.",
    tools: ["Proposal Writing", "Dashboard Design", "Data Visualization"],
    href: "/projects/china-telecom",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section aria-label="All projects">
            <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
              All Projects
            </h2>
            
            <div className="group/list space-y-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
