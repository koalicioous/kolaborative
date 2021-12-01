import { useState, useEffect } from 'react';
import { Talent } from '../../lib/newProject/data/project';
import { useStore } from '../../lib/newProject/stores/createProject';
// import CreateTalentInput from './project-create-talents-input';
import CreateTalentInputMaterial from './project-create-talents-input-material';
import TalentItem from './project-create-talents-item';

export default function ProjectCreateTalents() {
  const { project } = useStore();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [idEdited, setIdEdited] = useState<string>('');
  const activeClass: string = 'bg-blue-50 text-blue-600';
  const disabledClass: string = 'bg-gray-50 text-gray-400 border border-gray-200';
  const pushButtonClass: string = project.talents.length > 0 && !isCreating && !idEdited
    ? activeClass : disabledClass;

  useEffect(() => {
    setIsCreating(false);
  }, [project]);

  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      {
        project.talents.length > 0
          && project.talents.map((talent: Talent) => (
            <div className="mt-2" key={talent.id}>
              {
                idEdited === talent.id
                  // ? (
                  //   <CreateTalentInput
                  //     talent={talent}
                  //     editTalent={setIdEdited}
                  //     cancelEdit={setIsCreating}
                  //     isEditing
                  //   />
                  // )
                  ? (
                    <CreateTalentInputMaterial
                      talent={talent}
                      editTalent={setIdEdited}
                      cancelEdit={setIsCreating}
                      isEditing
                    />
                  )
                  : <TalentItem talent={talent} editTalent={setIdEdited} />
              }
            </div>
          ))
      }
      {
        (project.talents.length < 1 || isCreating)
        && <div className="mt-3"><CreateTalentInputMaterial isEditing={false} editTalent={setIdEdited} cancelEdit={setIsCreating} /></div>
      }
      <div className="border-b border-gray-200 mt-4" />
      <button type="button" disabled={project.talents.length < 1 || isCreating || idEdited !== ''} className={`p-3 rounded-md w-full mt-4 text-sm ${pushButtonClass}`} onClick={() => setIsCreating(true)}>
        + Tambah Kebutuhan Talenta
      </button>
    </section>
  );
}
