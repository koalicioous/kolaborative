import Link from 'next/link';
import { STEP_DETAIL, STEP_TALENT } from '../../constants/global';

interface CreateProjectTabProps {
    step : string
}

export default function CreateProjectTab({ step }: CreateProjectTabProps) {
  const isStepDetail: boolean = step ? step === STEP_DETAIL : true;
  const isStepTalent: boolean = step === STEP_TALENT;
  const activeClass: string = 'bg-blue-100 text-blue-600 border border-blue-400';
  const inactiveClass: string = 'bg-gray-100 text-gray-400 border border-gray-200';
  const detailClass: string = isStepDetail ? activeClass : inactiveClass;
  const talentClass: string = isStepTalent ? activeClass : inactiveClass;

  return (
    <section className="max-w-lg mx-auto bg-white grid grid-cols-2 gap-2 px-3 pt-4">
      <Link href={{ pathname: '/create-project', query: { step: STEP_DETAIL } }}>
        <a type="button" className={`p-1 w-full shadow rounded-full text-center font-bold text-sm ${detailClass}`}>
          1. Informasi Proyek
        </a>
      </Link>
      <Link href={{ pathname: '/create-project', query: { step: STEP_TALENT } }}>
        <a type="button" className={`p-1 w-full shadow rounded-full text-center font-bold text-sm ${talentClass}`}>
          2. Kebutuhan Talenta
        </a>
      </Link>
    </section>
  );
}
