import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WashingtonStateLibraryPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24 pb-20">
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center font-medium text-primary hover:text-highlight"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-highlight mb-2">
                Washington State Library — Adult Learner Certification Toolkit
              </h1>
              <p className="text-muted-foreground">
                Building a marketing toolkit and certification roadmap to
                connect adult learners with workforce credentials.
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  TL;DR
                </h2>
                <p>
                  Collaborating with the Washington State Library to create a
                  data-driven marketing toolkit that helps libraries reach
                  emerging adults, older adults, and job seekers with high-value
                  certifications.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Problem
                </h2>
                <p>
                  Many public libraries have access to workforce resources like
                  GMetrix but struggle to market them effectively to adult
                  learners. Awareness is low among motivated, time-constrained
                  patrons who need clear, actionable guidance.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Goals & MVP
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">
                      Workforce Alignment:
                    </span>{" "}
                    Build a framework that evaluates which certifications offer
                    the highest ROI in Washington State's labor market.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Community Analysis:
                    </span>{" "}
                    Research motivations for emerging adults, older adults, and
                    residents seeking family-wage job pathways.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Actionable Design:
                    </span>{" "}
                    Produce a high-fidelity Figma Marketing Toolkit with
                    customizable templates and a Certification Roadmap for
                    library patrons.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Process
                </h2>
                <div className="space-y-4">
                  <p>
                    As part of InsightLoop, we followed a structured research
                    and design sprint across three phases: research, strategy,
                    and design. Each phase focused on aligning library outreach
                    with workforce outcomes and accessible marketing.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium text-highlight">
                        Research Phase:
                      </span>{" "}
                      Conducted a landscape scan of adult learning platforms and
                      analyzed labor market data to prioritize certifications.
                    </p>
                    <p>
                      <span className="font-medium text-highlight">
                        Strategy Phase:
                      </span>{" "}
                      Used a 2x2 Prioritization Matrix to identify must-have
                      assets like persona-specific flyers and market signal
                      dashboards.
                    </p>
                    <p>
                      <span className="font-medium text-highlight">
                        Design Phase:
                      </span>{" "}
                      Building a scalable Figma Design System to keep marketing
                      assets accessible, professional, and easy for library
                      staff to reuse.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  My Role
                </h2>
                <div className="space-y-2">
                  <p>
                    I led the dataset analysis and Tableau storytelling for the
                    project, turning workforce and certification data into
                    clear, actionable insights for library partners.
                  </p>
                  <p>
                    I also built the Certification Roadmap interactive prototype
                    and coordinated closely with our sponsor, Joyce Abbott, to
                    ensure the toolkit supports digital equity.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">
                      Analyze demand:
                    </span>{" "}
                    Mapped high-value certifications in IT, healthcare, and
                    workforce-adjacent fields against Washington labor data.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Segment audiences:
                    </span>{" "}
                    Defined adult learner personas and identified their primary
                    motivations, barriers, and communication preferences.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Design toolkit assets:
                    </span>{" "}
                    Created flyer templates, dashboards, and the Certification
                    Roadmap to simplify next steps for patrons.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">
                      Validate with stakeholders:
                    </span>{" "}
                    Iterated designs with sponsor feedback to ensure alignment
                    with Washington State Library values.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Key Tradeoffs
                </h2>
                <p>
                  The main tradeoff was balancing data depth with accessibility:
                  library staff needed templates that were easy to use, while
                  adult learners needed evidence-based recommendations. We
                  prioritized clear visuals and reusable content over overly
                  complex analytics.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Deliverables
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    High-fidelity Figma Marketing Toolkit with accessible
                    templates.
                  </li>
                  <li>
                    Certification Roadmap prototype showing skill pathways for
                    adult learners.
                  </li>
                  <li>
                    Persona-focused outreach assets for emerging adults, older
                    adults, and family-wage job seekers.
                  </li>
                  <li>
                    Research-backed certification prioritization framework for
                    Washington State Library.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  What I’d Improve Next
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Pilot the toolkit with library partners and iterate based on
                    real user engagement.
                  </li>
                  <li>
                    Expand the roadmap to include ongoing learner support
                    resources and digital literacy guides.
                  </li>
                  <li>
                    Build a lightweight dashboard to track certification
                    interest and library outreach performance over time.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "WCAG Accessibility",
                    "Design Systems",
                    "Market Research",
                    "Stakeholder Coordination",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
