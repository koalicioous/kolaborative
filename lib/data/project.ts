export type Project = {
  readonly slug: string,
  readonly name: string,
  readonly description?: string,
  readonly goal?: string,
  readonly duration?: string,
}

export type Goal = {
  id: string,
  description: string,
}

export interface NewProject {
  name: string,
  isPrivate: boolean,
  event?: string,
  registrationDeadline: string,
  description: string,
  goals: Goal[],
  startDate?: string,
  finishDate?: string,
}
