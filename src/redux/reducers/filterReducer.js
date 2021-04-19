import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "../types/filterTypes";

const initialState = {
  filter: null,
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        filter: ["completed", "!=", ""],
      };
    case SHOW_ACTIVE:
      return {
        ...state,
        filter: ["completed", "==", false],
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        filter: ["completed", "==", true],
      };
    default:
      return state;
  }
};
export default filterReducer;
