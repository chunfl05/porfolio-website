import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";

const skillCategories = [
  {
    title: "Data Analysis & Statistical Testing",
    description:
      "Clean, transform, and analyze datasets to answer business questions using appropriate statistical methods.",
    proof:
      "In my Healthcare Disparities project, I used pandas for data wrangling, engineered features like Insurance Type, and applied t-tests and ANOVA to identify statistically significant differences in access and outcomes.",
    skills: ["Python", "pandas", "t-test", "ANOVA", "EDA", "Feature Engineering"],
  },
  {
    title: "Data Visualization & Dashboards",
    description:
      "Create clear visualizations and dashboards that help stakeholders understand patterns and make decisions.",
    proof:
      "At China Telecom, I contributed to a drone dashboard integrating real-time route tracking and data visualization, improving how operators monitor and interact with flight data.",
    skills: ["Data Visualization", "Dashboard Design", "Real-time Data"],
  },
  {
    title: "Product & UX Collaboration",
    description:
      "Work with designers and engineers to build data-informed features that improve user experience.",
    proof:
      "On the Dubloo project, I built sorting/filtering interactions in JavaScript, collaborated on responsive mobile layouts, and resolved UI disagreements through direct discussion with teammates.",
    skills: ["JavaScript", "CSS", "Responsive Design", "UI Collaboration"],
  },
  {
    title: "Technical Communication & Proposals",
    description:
      "Translate technical concepts into clear documentation and proposals for non-technical audiences.",
    proof:
      "At China Telecom, I wrote multiple AI module proposals for an education cloud product, communicating technical requirements and business value to stakeholders.",
    skills: ["Proposal Writing", "Technical Documentation", "Stakeholder Communication"],
  },
];

const toolsList = {
  Languages: ["Python", "R", "SQL", "JavaScript", "CSS"],
  Analysis: ["pandas", "Statistical Testing", "EDA", "Feature Engineering"],
  Visualization: ["Data Visualization Libraries", "Dashboard Design"],
  Other: ["Responsive Web Design", "Proposal Writing", "UI Collaboration"],
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
