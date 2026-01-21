import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChinaTelecomPage() {
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
                China Telecom — AI Proposals & Drone Dashboard
              </h1>
              <p className="text-muted-foreground">
                Translating technical concepts for business stakeholders
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  TL;DR
                </h2>
                <p>
                  Wrote AI module proposals for an education cloud product. Contributed 
                  to a drone dashboard with route tracking and improved data visualization. 
                  Practiced translating technical concepts for business stakeholders.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Problems Addressed
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">Education cloud product:</span>{" "}
                    Needed AI capabilities but lacked clear proposals for what to build and why.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Drone dashboard:</span>{" "}
                    Operators needed real-time visibility into drone routes and status, but 
                    existing display and interaction were limited.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  My Role
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Proposal writer for AI modules (education cloud product)</li>
                  <li>Contributor to drone dashboard (UI/data visualization integration, route tracking support)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  AI Module Proposals Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">Gathered requirements:</span>{" "}
                    Understood what the education cloud product needed and what AI could realistically deliver.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Researched options:</span>{" "}
                    Evaluated different AI module approaches and their tradeoffs.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Wrote proposals:</span>{" "}
                    Documented technical requirements, expected outcomes, and business value.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Iterated based on feedback:</span>{" "}
                    Revised proposals based on stakeholder input.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Drone Dashboard Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">Understood operator needs:</span>{" "}
                    Learned what information drone operators need in real-time.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Integrated data visualization:</span>{" "}
                    Connected route tracking data to visual display components.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Improved display/interaction:</span>{" "}
                    Enhanced how operators interact with the dashboard and view flight data.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Tested and refined:</span>{" "}
                    Iterated based on operator feedback.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Key Tradeoffs
                </h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-medium text-highlight">Proposals:</span>{" "}
                    Technical depth vs. accessibility—proposals needed enough detail for 
                    engineers but clarity for business stakeholders. I structured documents 
                    with executive summaries and technical appendices.
                  </p>
                  <p>
                    <span className="font-medium text-highlight">Dashboard:</span>{" "}
                    Information density vs. clarity—operators need many data points but 
                    can&apos;t process cluttered displays. We prioritized critical metrics 
                    with drill-down for details.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Deliverables
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-highlight mb-2">AI Module Proposals</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Multiple written proposals for AI modules</li>
                      <li>Each included problem statement, proposed solution, technical requirements, and business value</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-highlight mb-2">Drone Dashboard</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Route tracking visualization showing drone position and path history</li>
                      <li>Improved data display with clearer hierarchy and interaction</li>
                      <li>Integration between data backend and visualization frontend</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Add predictive elements to drone dashboard (estimated arrival, battery depletion)</li>
                  <li>Create templates for future AI proposals to standardize format</li>
                  <li>Build automated data quality checks into dashboard data pipeline</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Proposal Writing", "UI/Data Visualization", "Dashboard Design", "Technical Communication"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tool}
                      </span>
                    )
                  )}
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
