export type Major = {
    id: string,
    name: string,
};

export type Skill = {
    id: string,
    name: string,
};

export type Event = {
    id: string,
    name: string,
};

export interface Filters {
    majors?: Major[],
    skills?: Skill[],
    events?: Event[],
    keyword?: string,
}

export interface FilterProp {
    visible: boolean,
    title: string,
    data: Major[] | Skill [] | Event[] | []
}

export const InitialMajors: Major[] = [
  { id: 'informatika', name: 'informatika' },
  { id: 'teknik industri', name: 'teknik industri' },
  { id: 'teknik kimia', name: 'teknik kimia' },
];

export const InitialSkills: Skill[] = [
  { id: '1', name: 'JavaScript' },
  { id: '2', name: 'Web Programming' },
  { id: '3', name: 'Graphic Design' },
];

export const InitialEvents: Event[] = [
  { id: '1', name: 'Pekan Kreativitas Mahasiswa' },
  { id: '2', name: 'Business Case Competition' },
  { id: '3', name: 'Gemastik' },
];
