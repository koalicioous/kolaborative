import { Major, Skill, Event } from "../data/filters";

export enum SetFilterActionType {
  'SET_KEYWORD' = 'SET_KEYWORD',
  'SET_MAJORS' = 'SET_MAJORS',
  'SET_SKILLS' = 'SET_SKILLS',
  'SET_EVENTS' = 'SET_EVENTS',
  'RESET_FILTERS' = 'RESET_FILTERS',
};

export interface SetFilterAction {
    type: SetFilterActionType,
    payload: Major[] | Skill[] | Event[] | string
}