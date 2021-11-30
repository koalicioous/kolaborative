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

export type Talent = {
  id: string,
  major: string,
  amount: number,
  description: string,
  skills: {id: string, text:string}[]
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
  name: 'asdf',
  isPrivate: true,
  event: '',
  registrationDeadline: '',
  description: 'asdf',
  goals: [],
  startDate: '',
  finishDate: '',
  talents: [],
};
