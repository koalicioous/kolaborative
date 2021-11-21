import Link from 'next/link';
import { MODE_OWNER, MODE_TALENT } from '../../constants/global';

interface HomePageTabProps {
  mode: string
}

export default function HomePageTab({ mode }: HomePageTabProps) {
  const isTalentMode: boolean = mode ? mode === MODE_TALENT : true;
  const isOwnerMode: boolean = mode === MODE_OWNER;
  const activeClass: string = 'text-blue-900';
  const inactiveClass: string = 'bg-blue-100 text-blue-900';
  const talentLinkClass: string = isTalentMode ? activeClass : inactiveClass;
  const ownerLinkClass: string = isOwnerMode ? activeClass : inactiveClass;

  return (
    <ul className="max-w-lg m-auto grid grid-cols-2 bg-white">
      <li>
        <Link href={{ pathname: '/', query: { mode: MODE_TALENT } }}>
          <a type="button" className={`p-4 w-full text-center font-bold text-sm ${talentLinkClass}`}>
            Mencari Proyek
          </a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/', query: { mode: MODE_OWNER } }}>
          <a type="button" className={`p-4 w-full text-center font-bold text-sm ${ownerLinkClass}`}>
            Mencari Talent
          </a>
        </Link>
      </li>
    </ul>
  );
}
