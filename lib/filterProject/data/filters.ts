import supabase from "../../supabase/client";

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
    data: Major[] | Skill [] | Event[] | [],
    mode: FilterModalMode,
}

export enum FilterModalMode {
  'Jurusan' = 'majors',
  'Keahlian' = 'skills',
  'Event' = 'events',
}

export const InitialFilters: Filters = {};
