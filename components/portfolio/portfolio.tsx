import type { Locale, PortfolioContent } from "@/data/portfolio";
import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { LiquidEtherBackground } from "./liquid-ether-background";
import { MotionProvider } from "./motion-provider";
import { PortfolioFooter } from "./portfolio-footer";
import { PortfolioHeader } from "./portfolio-header";
import { ProjectsSection } from "./projects-section";
import { ServicesSection } from "./services-section";

type Props = { locale: Locale; content: PortfolioContent };

export function Portfolio({ locale, content }: Props) {
  return (
    <MotionProvider>
      <main className="relative mx-auto flex max-w-[1680px] flex-col overflow-visible px-[4.5vw] pt-16 isolate max-md:px-5 max-md:pt-14">
        <LiquidEtherBackground />
        <div
          aria-hidden="true"
          className="background-noise pointer-events-none fixed inset-0 -z-5"
        />
        <PortfolioHeader locale={locale} navigation={content.navigation} />
        <HeroSection hero={content.hero} name={content.name} />
        <AboutSection about={content.about} />
        <ExperienceSection experience={content.experience} />
        <ProjectsSection work={content.work} projects={content.projects} />
        <ServicesSection services={content.services} />
        <ContactSection contact={content.contact} />
        <PortfolioFooter>{content.footer}</PortfolioFooter>
      </main>
    </MotionProvider>
  );
}
