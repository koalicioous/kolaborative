import { Talent } from "../data/project";

export enum NewProjectTalentActionType {
    'INSERT_TALENT' = 'INSERT_TALENT',
    'EDIT_TALENT' = 'INSERT_TALENT',
    'REMOVE_TALENT' = 'REMOVE_TALENT'
};

export interface NewProjectTalentAction {
    type: NewProjectTalentActionType,
    payload: Talent
}