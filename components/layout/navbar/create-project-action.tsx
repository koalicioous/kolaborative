import { Skill } from '../../../lib/filterProject/data/filters';
import { Talent } from '../../../lib/newProject/data/project';
import { useStore } from '../../../lib/newProject/stores/createProject';
import supabase from '../../../lib/supabase/client';

export default function CreateProjectAction() {
  const { project } = useStore();
  const ACTIVE_CLASS: string = 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg';
  const INACTIVE_CLASS: string = 'bg-gray-200 text-gray-400 border border-gray-300';
  const IS_ENABLED: boolean = project.name
  && project.description
  && project.talents.length > 0;
  const SUBMIT_BUTTON_CLASS: string = IS_ENABLED ? ACTIVE_CLASS : INACTIVE_CLASS;

  const handleSubmitProject = async () => {
    const SKILLS: Skill[] = [];
    project.talents.map((talent: Talent) => talent.skills.map(
      (skill: Skill) => {
        if (SKILLS.filter((item) => item.name === skill.name).length < 1) return SKILLS.push(skill);
        return false;
      },
    ));
    const { data: NEW_INSERTED_SKILLS } = await supabase
      .from<Skill>('skills')
      .insert(SKILLS.filter(
        (skill: Skill) => skill.id === 0,
      ).map((item: Skill) => ({ name: item.name })));
    if (NEW_INSERTED_SKILLS) {
      project.talents.map((talent: Talent, index: number) => {
        project.talents[index].skills = talent.skills.map(
          (skill: Skill) => {
            const NEW_SKILL = NEW_INSERTED_SKILLS.filter((item: Skill) => item.name === skill.name);
            if (NEW_SKILL.length > 0) {
              return NEW_SKILL[0];
            }
            return skill;
          },
        );
        return true;
      });
    }
  };

  return (
    <div className="fixed bottom-0 z-10 p-3 border-t-2 bg-white w-full border-gray-100 shadow-xl">
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-4 text-center">
        <button type="button" className="text-sm text-blue-500">
          Simpan sebagai draft
        </button>
        <button type="button" disabled={!IS_ENABLED} onClick={handleSubmitProject} className={`transition-all rounded-md p-2 ${SUBMIT_BUTTON_CLASS}`}>
          Publikasikan
        </button>
      </div>
    </div>
  );
}
