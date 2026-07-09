import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-highlight lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I became interested in data analysis because I like solving puzzles
          that matter. Numbers tell stories, but only if you know how to ask the
          right questions and present the answers clearly.
        </p>

        <p>
          I&apos;m pursuing an{" "}
          <span className="font-medium text-highlight">
            M.P.S. in Data Science and Applied Statistics
          </span>{" "}
          at{" "}
          <span className="font-medium text-highlight">Cornell University</span>
          , building on a{" "}
          <span className="font-medium text-highlight">
            B.S. in Informatics (Data Science Track)
          </span>{" "}
          from the{" "}
          <a
            href="https://www.washington.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-highlight hover:text-primary"
          >
            University of Washington
          </a>
          , where I graduated with a 3.87 GPA and Dean&apos;s List recognition
          for 9 quarters. Along the way I&apos;ve developed skills in{" "}
          <span className="font-medium text-highlight">Python</span>,{" "}
          <span className="font-medium text-highlight">R</span>,{" "}
          <span className="font-medium text-highlight">SQL</span>,{" "}
          <span className="font-medium text-highlight">JavaScript</span>,{" "}
          <span className="font-medium text-highlight">Tableau</span>, and{" "}
          <span className="font-medium text-highlight">Power BI</span>.
        </p>

        <p>
          I&apos;m currently a{" "}
          <span className="font-medium text-highlight">
            Marketing Analyst
          </span>{" "}
          at <span className="font-medium text-highlight">TestSprite</span> in
          Seattle, where I partner with 100+ AI and developer creators, build
          Tableau dashboards to track marketing KPIs, and run weekly SEO/GEO
          monitoring to guide creator selection and ROI decisions.
        </p>

        <p>
          On the project side, I led database schema design and end-to-end
          product development for{" "}
          <span className="font-medium text-highlight">EduHear</span>, an
          audio-first learning platform, writing multi-table SQL queries and
          views to power engagement dashboards. For the{" "}
          <span className="font-medium text-highlight">
            Washington State Library
          </span>{" "}
          study, I analyzed job postings across IT, Healthcare, and Admin
          sectors, built Tableau dashboards on certification demand, and
          redesigned the library&apos;s website UX in Figma based on usability
          testing with 100+ adult learners.
        </p>

        <p>
          Earlier, at{" "}
          <span className="font-medium text-highlight">China Telecom</span> in
          Shenzhen, I authored technical proposals for an AI module in an
          education cloud product and validated monitoring functionality for a
          drone medicine delivery dashboard. Before that, at{" "}
          <span className="font-medium text-highlight">
            Guangzhou Rastar Entertainment
          </span>
          , I analyzed game performance and user spending data to support
          product and marketing strategy.
        </p>

        <p>
          I work best when I can move between independent analysis and team
          collaboration. I ask questions, document my process, and prefer direct
          feedback over assumptions.
        </p>

        <p>
          I&apos;m always open to connecting about{" "}
          <span className="font-medium text-highlight">
            Data Analyst, Data Scientist, or Product Analytics
          </span>{" "}
          opportunities where I can grow while contributing real value.
        </p>
      </div>
    </section>
  );
}
