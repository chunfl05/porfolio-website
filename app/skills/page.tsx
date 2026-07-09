import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";

const skillCategories = [
  {
    title: "Data Analysis & Market Research",
    description:
      "Clean, transform, and analyze datasets to answer business and marketing questions.",
    proof:
      "At TestSprite, I run weekly SEO/GEO monitoring on keyword rankings and competitor data, and built two structured CSV datasets of 30–50 WA job postings for the Washington State Library study, revealing pay and hiring-speed differences by certification type.",
    skills: ["Python", "R", "SQL", "Excel", "Market Research"],
  },
  {
    title: "Data Visualization & Dashboards",
    description:
      "Create clear visualizations and dashboards that help stakeholders understand patterns and make decisions.",
    proof:
      "I built Tableau dashboards tracking marketing KPIs (reach, engagement, conversion) at TestSprite and certification demand at the Washington State Library, plus SQL-backed engagement dashboards for EduHear and a monitoring dashboard for China Telecom's drone delivery system.",
    skills: ["Tableau", "Power BI", "SQL", "Dashboard Design"],
  },
  {
    title: "Product & UX Design",
    description:
      "Work with users and stakeholders to design and validate data-informed product experiences.",
    proof:
      "I redesigned the Washington State Library website's UI/UX in Figma based on surveys and usability testing with 100+ adult learners, and led end-to-end database and product design for EduHear, an audio-first learning platform.",
    skills: ["Figma", "Usability Testing", "Product Strategy"],
  },
  {
    title: "Technical Communication & Proposals",
    description:
      "Translate technical concepts into clear documentation and proposals for non-technical audiences.",
    proof:
      "At China Telecom, I authored 3 technical proposals for an AI module in an education cloud product, and drafted deployment requirement documents for the Shenzhen International Exchange Center app spanning 10+ business modules.",
    skills: ["Proposal Writing", "Technical Documentation", "Stakeholder Communication"],
  },
];

const toolsList = {
  "Programming Languages": ["Python", "R (proficient)", "JavaScript", "SQL"],
  "Analysis & Visualization": ["Tableau", "Power BI", "Excel"],
  Design: ["Figma"],
  "Spoken Languages": ["Mandarin", "English"],
};

export default function SkillsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24 pb-20">
          <section aria-label="Skills">
            <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
              Capabilities
            </h2>

            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative rounded-lg border border-border p-6 transition-colors hover:border-primary/30 hover:bg-secondary/30"
                >
                  <h3 className="text-lg font-semibold text-highlight mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-highlight">What I can do:</span>{" "}
                    {category.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-medium text-highlight">Proof:</span>{" "}
                    {category.proof}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">
                Tools & Technologies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Object.entries(toolsList).map(([category, tools]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-highlight mb-3">
                      {category}
                    </h3>
                    <ul className="space-y-1">
                      {tools.map((tool) => (
                        <li key={tool} className="text-sm text-muted-foreground">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
