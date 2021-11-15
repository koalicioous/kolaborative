import HomePageTalentMajors from './homepage-talent-majors';
// import HomePageTalentProjectTypes from './homepage-talent-project-types';
import HomePageTalentProjects from './homepage-talent-projects';
import HomePageTalentSkills from './homepage-talent-skills';
import HomePageTalentWelcome from './homepage-talent-welcome';
import HomePageTalentEvents from './homepage-talent-events';

export default function HomePageTalent() {
  return (
    <section>
      <HomePageTalentWelcome />
      <HomePageTalentMajors />
      {/* <HomePageTalentProjectTypes /> */}
      <HomePageTalentSkills />
      <HomePageTalentEvents />
      <HomePageTalentProjects />
    </section>
  );
}
