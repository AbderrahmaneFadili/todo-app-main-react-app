import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from "../types/filterTypes";

export const showAll = () => {
  return { type: SHOW_ALL };
};

export const showActive = () => {
  return { type: SHOW_ACTIVE };
};

export const showCompleted = () => {
  return { type: SHOW_COMPLETED };
};
