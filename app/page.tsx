import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          
          <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                className="font-medium text-highlight hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                className="font-medium text-highlight hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
              , deployed on{" "}
              <a
                href="https://vercel.com"
                className="font-medium text-highlight hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
