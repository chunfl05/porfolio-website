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
          I&apos;m currently studying{" "}
          <span className="font-medium text-highlight">
            Informatics (Data Science Track)
          </span>{" "}
          at the{" "}
          <a
            href="https://www.washington.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-highlight hover:text-primary"
          >
            University of Washington
          </a>
          , where I&apos;ve been on the Dean&apos;s List and developed skills in{" "}
          <span className="font-medium text-highlight">Python</span>,{" "}
          <span className="font-medium text-highlight">R</span>,{" "}
          <span className="font-medium text-highlight">SQL</span>,{" "}
          <span className="font-medium text-highlight">JavaScript</span>, and
          statistical methods. My coursework and projects have taught me to work
          with large datasets, run hypothesis tests, build visualizations, and
          collaborate with designers and engineers.
        </p>

        <p>
          One project I&apos;m proud of is{" "}
          <span className="font-medium text-highlight">Dubloo</span>, a restroom
          accessibility platform. I built the sorting and filtering interactions
          and worked through UI disagreements with teammates to deliver a
          responsive, user-friendly experience. Another is my healthcare
          disparities analysis, where I engineered features like Insurance Type,
          ran t-tests and ANOVA, and turned statistical findings into clear
          visual stories.
        </p>

        <p>
          At <span className="font-medium text-highlight">China Telecom</span>,
          I contributed to a drone dashboard—integrating route tracking and
          improving how operators interact with live data. I also wrote multiple
          proposals for AI modules in an education cloud product, which taught
          me how to communicate technical ideas to business stakeholders.
        </p>

        <p>
          I work best when I can move between independent analysis and team
          collaboration. I ask questions, document my process, and prefer direct
          feedback over assumptions.
        </p>

        <p>
          I&apos;m seeking{" "}
          <span className="font-medium text-highlight">
            Data Analyst, Data Scientist, or Product Analytics
          </span>{" "}
          roles where I can grow while contributing real value.
        </p>
      </div>
    </section>
  );
}
