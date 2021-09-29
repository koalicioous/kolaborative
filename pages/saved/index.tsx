import { ReactElement } from "react"
import BasicLayout from "../../components/layout/base/basic-layout"
import ProjectItem from "../../components/projects/project-item"

export default function Saved() {
  return (
    <div className="max-w-lg mx-auto px-5 py-4 bg-white">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        <h1 className="ml-2 font-bold text-indigo-700">
          Saved Projects
        </h1>
      </div>
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
    </div>
  )
}

Saved.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  )
}