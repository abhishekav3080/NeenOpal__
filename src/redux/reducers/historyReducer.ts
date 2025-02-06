// Define the history reducer
import { UNDO, REDO } from "../actions/types";
import { HistoryState } from "../../types";

const initialState: HistoryState = {
  past: [],
  present: null,
  future: [],
};

const historyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UNDO:
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, state.past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    case REDO:
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    default:
      return state;
  }
};

export default historyReducer;
