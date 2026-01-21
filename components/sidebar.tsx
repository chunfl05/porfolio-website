import { Navigation } from "./navigation";
import { SocialLinks } from "./social-links";

export function Sidebar() {
  return (
    <header className="md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:justify-between md:py-24 lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-highlight sm:text-5xl">
          Chunfei Liu
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Data Analyst
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I turn complex datasets into actionable product insights for engineering and product teams.
        </p>

        <div className="mt-16">
          <Navigation />
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <SocialLinks />
      </div>
    </header>
  );
}
