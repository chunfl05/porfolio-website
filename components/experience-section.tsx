import { ArrowUpRight } from "lucide-react";

interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  skills: string[];
}

function ExperienceItem({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  skills,
}: ExperienceItemProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50" />

      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        {dateRange}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-highlight">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline font-medium leading-tight text-highlight hover:text-primary focus-visible:text-primary group/link"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {title} · <span className="inline-block">{company}</span>
              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
            </span>
          </a>
        </h3>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {skills.map((skill) => (
            <li key={skill} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      dateRange: "2024",
      title: "Marketing Analysis Intern",
      company: "Guangzhou Rastar Entertainment Co., Ltd.",
      description:
        "Analyzed 10+ top-performing games and additional domestic/international titles across mobile and PC platforms in weekly industry reports; evaluated gameplay, user experience, and market positioning to support product strategy. Supported the development of a tiered paid-user segmentation model by analyzing global user spending and engagement data, identifying key characteristics of high-value users to guide targeted marketing. Collected and analyzed key performance metrics related to user acquisition, retention, engagement, and monetization; created Excel-based dashboards and collaborated with design teams to refine user behavior tags and support product iteration decisions.",
      skills: [
        "Data Analysis",
        "Excel",
        "User Segmentation",
        "Market Research",
        "Dashboard Creation",
      ],
    },
    {
      dateRange: "2025",
      title: "Product Analytics Intern",
      company: "China Telecom",
      description:
        "Wrote AI module proposals for an education cloud product, communicating technical requirements and business value to stakeholders. Contributed to a drone dashboard with route tracking and improved data visualization for operators.",
      skills: [
        "Proposal Writing",
        "Data Visualization",
        "Dashboard Design",
        "UI/UX",
      ],
    },
    {
      dateRange: "2023 — Present",
      title: "Informatics Student",
      company: "University of Washington",
      companyUrl: "https://www.washington.edu",
      description:
        "Pursuing Data Science Track with Dean's List recognition. Building experience in Python, R, SQL, and statistical analysis through coursework and hands-on projects analyzing healthcare disparities and building accessibility platforms.",
      skills: [
        "Python",
        "R",
        "SQL",
        "Statistical Analysis",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-highlight lg:sr-only">
          Experience
        </h2>
      </div>

      <div className="group/list">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
