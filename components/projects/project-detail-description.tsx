interface ProjectDetailDescriptionProps {
  description: string
}

export default function ProjectDetailDescription({ description }: ProjectDetailDescriptionProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4">
      <h2 className="text-xs font-bold text-blue-700">
        Description
      </h2>
      <p className="text-xs mt-2 leading-5">
        {description}
      </p>
    </div>
  );
}
