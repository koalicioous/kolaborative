import { format, intervalToDuration } from 'date-fns';

interface ProjectDetailDurationProps {
  startDate: string,
  finishDate: string
}

export default function ProjectDetailDuration({
  startDate, finishDate,
}: ProjectDetailDurationProps) {
  const duration = intervalToDuration({ start: new Date(startDate), end: new Date(finishDate) });
  const formattedDuration = `
    ${duration.years ? `${duration.years} tahun ` : ''} 
    ${duration.months ? `${duration.months} bulan ` : ''} 
    ${duration.days ? `${duration.days} hari ` : ''} 
  `;
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-xs font-bold text-blue-700">
        Project Duration
      </h2>
      <p className="text-xs mt-2 leading-5">
        { `${formattedDuration} (${format(new Date(startDate), 'dd MMMM yyy')} — ${format(new Date(finishDate), 'dd MMMM yyy')})` }
      </p>
    </div>
  );
}
