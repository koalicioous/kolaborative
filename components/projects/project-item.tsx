interface ProjectItemProps {
  className?: string
}

export default function ProjectItem({className}: ProjectItemProps) {
  return (
    <div className={`p-2 shadow-md border rounded-lg ${className}`}>
      <div className="flex justify-between">
        <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
        <span className="text-xs">15 September 2021</span>
      </div>
      <h3 className="mt-2 text-sm font-bold text-indigo-700">
        Karya Cipta: Mesin Pembersih Air Bertenaga Surya
      </h3>
      <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
    </div>
  )
}
