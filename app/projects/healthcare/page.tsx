import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HealthcarePage() {
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
                Disparities in Healthcare Access & Outcomes
              </h1>
              <p className="text-muted-foreground">
                Statistical analysis identifying significant healthcare disparities
              </p>
            </header>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  TL;DR
                </h2>
                <p>
                  Analyzed a large healthcare dataset to identify disparities in access 
                  and outcomes across populations. Used feature engineering, statistical 
                  testing, and visualization to communicate findings clearly.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Problem
                </h2>
                <p>
                  Healthcare disparities exist across different populations, but 
                  understanding which factors drive the greatest differences requires 
                  rigorous analysis of large datasets.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  My Role
                </h2>
                <p>
                  Data analyst responsible for data wrangling, feature engineering, 
                  statistical testing, visualization, and communicating insights.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Approach
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-highlight">Data exploration:</span>{" "}
                    Loaded dataset with pandas and assessed size, structure, missing values, 
                    and variable types.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Feature engineering:</span>{" "}
                    Created derived variables like Insurance Type to enable more meaningful comparisons.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Exploratory data analysis:</span>{" "}
                    Examined distributions, correlations, and patterns across demographic groups.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Hypothesis formulation:</span>{" "}
                    Identified specific questions about disparities to test statistically.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Statistical testing:</span>{" "}
                    Applied t-tests for two-group comparisons and ANOVA for multi-group comparisons.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Visualization:</span>{" "}
                    Created charts that communicate findings to non-technical audiences.
                  </li>
                  <li>
                    <span className="font-medium text-highlight">Insight synthesis:</span>{" "}
                    Summarized key findings and their implications.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Key Tradeoff
                </h2>
                <p>
                  <span className="font-medium text-highlight">Depth vs. breadth</span>—I 
                  could analyze many variables superficially or fewer variables rigorously. 
                  I chose to focus on variables with clear policy implications (insurance, 
                  income, geography) and analyze them thoroughly.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Deliverables
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Clean, documented analysis notebook</li>
                  <li>Feature-engineered dataset with Insurance Type and other derived variables</li>
                  <li>Statistical test results showing which disparities are significant</li>
                  <li>Visualizations showing magnitude and direction of disparities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  What I&apos;d Improve Next
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Add regression analysis to control for confounding variables</li>
                  <li>Incorporate time-series analysis if longitudinal data available</li>
                  <li>Build an interactive dashboard so stakeholders can explore the data themselves</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-highlight mb-3">
                  Tools Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Python", "pandas", "t-test", "ANOVA", "Data Visualization", "EDA"].map(
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
