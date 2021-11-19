import { v4 as uuidv4 } from 'uuid';
import { NewProject } from '../data/project';
import { NewProjectDetailAction, NewProjectDetailActionType } from '../actions/NewProjectDetailAction';
import { NewProjectTalentAction, NewProjectTalentActionType } from '../actions/NewProjectTalentsAction';

const NewProjectReducer = (
  state: NewProject,
  action: NewProjectDetailAction | NewProjectTalentAction,
): NewProject => {
  switch (action.type) {
    case NewProjectDetailActionType.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.payload,
      };
    case NewProjectDetailActionType.TOGGLE_CHECKBOX:
      return {
        ...state,
        isPrivate: !state.isPrivate,
      };
    case NewProjectDetailActionType.INSERT_GOALS:
      return {
        ...state,
        goals: [...state.goals, { id: uuidv4(), description: '' }],
      };
    case NewProjectDetailActionType.REMOVE_GOAL:
      return {
        ...state,
        goals: [...state.goals.filter((goal) => goal.id !== action.payload)],
      };
    case NewProjectDetailActionType.EDIT_GOAL_DESCRIPTION:
      return {
        ...state,
        goals: [
          ...state.goals.map((goal) => {
            if (goal.id !== action.field) {
              return goal;
            }
            return {
              id: goal.id,
              description: String(action.payload),
            };
          }),
        ],
      };
    case NewProjectTalentActionType.INSERT_TALENT:
      return {
        ...state,
        talents: [...state.talents, action.payload],
      };
    case NewProjectTalentActionType.EDIT_TALENT:
      return {
        ...state,
        talents: [
          ...state.talents.map((talent) => {
            if (talent.id === action.payload.id) return action.payload;
            return talent;
          }),
        ],
      };
    case NewProjectTalentActionType.REMOVE_TALENT:
      return {
        ...state,
        talents: [...state.talents.filter((talent) => talent.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default NewProjectReducer;
