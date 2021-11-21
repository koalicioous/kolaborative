import Link from 'next/link';
import { STEP_DETAIL, STEP_TALENT } from '../../constants/global';
import { useStore } from '../../lib/newProject/stores/createProject';
import InfoCircleSolid from '../ui/icons/solid/info-circle';
import UsersSolid from '../ui/icons/solid/users';

interface CreateProjectTabProps {
    step : string
}

export default function CreateProjectTab({ step }: CreateProjectTabProps) {
  const { project } = useStore();
  const isStepDetail: boolean = step ? step === STEP_DETAIL : true;
  const isStepTalent: boolean = step === STEP_TALENT;
  const activeClass: string = 'bg-blue-100 text-blue-600 border border-blue-400';
  const inactiveClass: string = 'bg-gray-100 text-gray-400 border border-gray-200';
  const completedClass: string = 'bg-green-200 text-green-500 border border-green-300';
  const completedActiveClass: string = 'bg-green-500 text-green-100 border border-green-300';
  const isDetailCompleted: boolean = project.name
  && project.description
  && project.registrationDeadline;
  const isTalentCompleted: boolean = project.talents.length;
  // eslint-disable-next-line no-nested-ternary
  const talentClass: string = isStepTalent
    ? (isTalentCompleted ? completedActiveClass : activeClass)
    : (isTalentCompleted ? completedClass : inactiveClass);
  // eslint-disable-next-line no-nested-ternary
  const detailClass: string = isStepDetail
    ? (isDetailCompleted ? completedActiveClass : activeClass)
    : (isDetailCompleted ? completedClass : inactiveClass);

  return (
    <section className="max-w-lg mx-auto bg-white grid grid-cols-2 gap-2 px-3 pt-4">
      <Link href={{ pathname: '/create-project', query: { step: STEP_DETAIL } }}>
        <a type="button" className={`transition-all p-1 w-full shadow flex items-center justify-center rounded-full text-center font-bold text-sm ${detailClass}`}>
          <InfoCircleSolid className="mt-1 h-5 flex justify-center items-center w-6" />
          Informasi Proyek
        </a>
      </Link>
      <Link href={{ pathname: '/create-project', query: { step: STEP_TALENT } }}>
        <a type="button" className={`transition-all p-1 w-full shadow flex items-center justify-center rounded-full text-center font-bold text-sm ${talentClass}`}>
          <UsersSolid className="pt-3 h-10 flex justify-center items-center w-6 -my-1" />
          Kebutuhan Talenta
        </a>
      </Link>
    </section>
  );
}
