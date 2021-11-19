import { Goal } from "../data/project";

export enum NewProjectDetailActionType {
  'UPDATE_FIELD' = 'UPDATE_FIELD',
  'TOGGLE_CHECKBOX' = 'TOGGLE_CHECKBOX',
  'INSERT_GOALS' = 'INSERT_GOALS',
  'REMOVE_GOAL' = 'REMOVE_GOAL',
  'EDIT_GOAL_DESCRIPTION' = 'EDIT_GOAL_DESCRIPTION'
};

export interface NewProjectDetailAction {
    type: NewProjectDetailActionType,
    field: string;
    payload?: String | Number | Date | Goal,
}
