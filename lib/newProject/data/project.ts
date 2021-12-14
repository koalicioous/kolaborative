/* eslint-disable camelcase */
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
  majors?: { id: string, name: string},
  amount: number,
  description: string,
  skills: Skill[]
}

export type Project = {
  readonly slug: string,
  readonly name: string,
  readonly description?: string,
  readonly project_goals?: Goal[],
  readonly project_requirements?: Talent[],
  readonly duration?: string,
  readonly events: { id: string, name: string }
}

export interface NewProject {
  id?: number,
  slug?: string,
  name: string,
  isPrivate: boolean,
  event?: string,
  registrationDeadline: string,
  description: string,
  goals: Goal[],
  startDate: string | null,
  finishDate: string | null,
  talents: Talent[],
  event_id?: string | { id: string, name: string },
  registration_deadline?: string,
  start_date?: string | null,
  finish_date?: string | null,
  is_private?: boolean,
  project_goals?: Goal[],
}

export const InitialState: NewProject = {
  name: '',
  isPrivate: true,
  event: '',
  registrationDeadline: '',
  description: '',
  goals: [],
  startDate: null,
  finishDate: null,
  talents: [],
};
