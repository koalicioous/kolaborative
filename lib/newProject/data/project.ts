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

export type Skill = {
  id: number,
  name: string
}

export type Talent = {
  id: string,
  major: { id: string, name: string},
  amount: number,
  description: string,
  skills: Skill[]
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
  talents: Talent[],
}

export const InitialState: NewProject = {
  name: '',
  isPrivate: true,
  event: '',
  registrationDeadline: '',
  description: '',
  goals: [],
  startDate: '',
  finishDate: '',
  talents: [],
};
