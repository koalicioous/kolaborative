import HomePageTalentMajors from './homepage-talent-majors';
import HomePageTalentProjectTypes from './homepage-talent-project-types';
import HomePageTalentProjects from './homepage-talent-projects';
import HomePageTalentSkills from './homepage-talent-skills';
import HomePageTalentWelcome from './homepage-talent-welcome';

export default function HomePageTalent() {
  return (
    <section>
      <HomePageTalentWelcome />
      <HomePageTalentMajors />
      <HomePageTalentProjectTypes />
      <HomePageTalentSkills />
      <HomePageTalentProjects />
    </section>
  );
}
