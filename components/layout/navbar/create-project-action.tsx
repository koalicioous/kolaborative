import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { Event, Major, Skill } from '../../../lib/filterProject/data/filters';
import { Goal, NewProject, Talent } from '../../../lib/newProject/data/project';
import { useStore } from '../../../lib/newProject/stores/createProject';
import supabase from '../../../lib/supabase/client';

interface CreateProjectActionProps {
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
}

export default function CreateProjectAction({ loading, setLoading }: CreateProjectActionProps) {
  const { project } = useStore();
  const ACTIVE_CLASS: string = 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg';
  const INACTIVE_CLASS: string = 'bg-gray-200 text-gray-400 border border-gray-300';
  const IS_ENABLED: boolean = project.name
  && project.description
  && project.talents.length > 0;
  const SUBMIT_BUTTON_CLASS: string = IS_ENABLED ? ACTIVE_CLASS : INACTIVE_CLASS;
  const router = useRouter();

  const handleSubmitProject = async () => {
    // Check if any new skill, if so, create new
    const SKILLS: Skill[] = [];
    const MAJORS: Major[] = [];
    setLoading(true);
    try {
      project.talents.map((talent: Talent) => {
        talent.skills.map(
          (skill: Skill) => {
            if (SKILLS.filter(
              (item) => item.name === skill.name,
            ).length < 1) return SKILLS.push(skill);
            return false;
          },
        );
        return MAJORS.push(talent.major);
      });
      const NOT_INSERTED_SKILLS = SKILLS.filter((skill: Skill) => skill.id === 0);
      const NOT_INSERTED_MAJORS = MAJORS.filter((major: Major) => typeof major === 'string');
      if (NOT_INSERTED_SKILLS.length > 0) {
        const { data: NEW_INSERTED_SKILLS } = await supabase
          .from<Skill>('skills')
          .insert(NOT_INSERTED_SKILLS.map((item: Skill) => ({ name: item.name })));
        if (NEW_INSERTED_SKILLS) {
          project.talents.map((talent: Talent, index: number) => {
            project.talents[index].skills = talent.skills.map(
              (skill: Skill) => {
                const NEW_SKILL = NEW_INSERTED_SKILLS.filter(
                  (item: Skill) => item.name === skill.name,
                );
                if (NEW_SKILL.length > 0) {
                  return NEW_SKILL[0];
                }
                return skill;
              },
            );
            return true;
          });
        }
      }
      if (NOT_INSERTED_MAJORS.length > 0) {
        const { data: NEW_INSERTED_MAJORS } = await supabase
          .from('majors')
          .insert(NOT_INSERTED_MAJORS.map((item) => ({ name: item })));
        if (NEW_INSERTED_MAJORS) {
          project.talents.map((talent: Talent) => {
            if (typeof talent === 'string') {
              return NEW_INSERTED_MAJORS.filter((item: Major) => item.name === talent);
            }
            return true;
          });
        }
      }
      // Create participating event
      let participatingEvent = project.event;
      if (typeof project.event === 'string') {
        const { data: NEW_EVENT } = await supabase
          .from<Event>('events')
          .insert([
            { name: project.event },
          ]);
        participatingEvent = NEW_EVENT;
      }
      // Create new Project
      const { data: NEW_PROJECT } = await supabase
        .from<NewProject>('projects')
        .insert([{
          name: project.name,
          slug: [...project.name.split(' '), String(Date.now()).substring(6, 12)].join('-'),
          event_id: participatingEvent.id ? participatingEvent.id : participatingEvent,
          registration_deadline: new Date(project.registrationDeadline).toISOString(),
          start_date: project.startDate ? new Date(project.startDate).toISOString() : null,
          finish_date: project.finishDate
            ? new Date(project.finishDate).toISOString() : null,
          is_private: project.isPrivate,
          description: project.description,
          project_goals: project.goals.length > 0 ? project.goals.filter((goal: Goal) => goal.description !== '') : null,
        }]);
      // Create User Project Relation
      if (NEW_PROJECT && NEW_PROJECT.length > 0) {
        const user = await supabase.auth.user();
        await supabase
          .from('user_project')
          .insert([{
            project_id: NEW_PROJECT[0].id,
            user_id: user?.id,
            role: 'OWNER',
          }]);
      }
      // Create Project Talent Requirements
      if (NEW_PROJECT && NEW_PROJECT.length > 0) {
        project.talents.map(async (talent: Talent) => {
          const { data: NEW_REQUIRED_TALENTS } = await supabase
            .from('project_requirements')
            .insert([{
              major_id: talent.major.id,
              description: talent.description,
              amount: talent.amount,
              project_id: NEW_PROJECT[0].id,
            }]);
          if (NEW_REQUIRED_TALENTS) {
            const { data: TALENT_SKILLS_RELATION } = await project.talents.map((item: Talent) => {
              item.skills.map(async (skill: Skill) => {
                await supabase
                  .from('project_requirement_skills')
                  .insert([{
                    skill_id: skill.id,
                    requirement_id: NEW_REQUIRED_TALENTS[0].id,
                  }]);
              });
              return true;
            });
            if (TALENT_SKILLS_RELATION) router.push({ pathname: '/myprojects' });
          }
        });
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
      router.push({ pathname: '/myprojects' });
    }
  };

  return (
    <div className="fixed bottom-0 z-10 p-3 border-t-2 bg-white w-full border-gray-100 shadow-xl" style={{ zIndex: 98 }}>
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-4 text-center">
        <button type="button" className="text-sm text-gray-300" disabled>
          Simpan sebagai draft
        </button>
        <LoadingButton variant="contained" type="button" loading={loading} disabled={!IS_ENABLED} onClick={handleSubmitProject} className={`transition-all rounded-md p-2 ${SUBMIT_BUTTON_CLASS}`}>
          Publikasikan
        </LoadingButton>
      </div>
    </div>
  );
}
