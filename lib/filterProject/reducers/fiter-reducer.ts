import { SetFilterAction, SetFilterActionType } from '../action/setFilterAction';
import { Filters, InitialFilters } from '../data/filters';

const FilterReducer = (
  state: Filters,
  action: SetFilterAction,
): Filters => {
  switch (action.type) {
    case SetFilterActionType.SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    case SetFilterActionType.SET_MAJORS:
      return {
        ...state,
        majors: action.payload.majors,
      };
    case SetFilterActionType.SET_SKILLS:
      return {
        ...state,
        skills: action.payload.skills,
      };
    case SetFilterActionType.SET_EVENTS:
      return {
        ...state,
        events: action.payload.events,
      };
    case SetFilterActionType.RESET_FILTERS:
      return InitialFilters;
    default:
      return state;
  }
};

export default FilterReducer;
