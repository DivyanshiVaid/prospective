import * as actiontypes from "../Actions/prospectsAction";
const initial = {
  initialState: [],
  secondState: [],
};

export const prospectsReducer = (state = initial, action) => {
  switch (action.type) {
    case actiontypes.ADD_USER: {
      let added = [...state.initialState, action.add];
      state.initialState = added;
      return state;
    }
    case actiontypes.DELETE_USER: {
      let deletedState=[...state.initialState]
      let deleted = deletedState.filter((elem) => elem.id !== action.del);
      return {
        ...state,
        initialState: deleted,
      };
    }
    case actiontypes.EDIT_USER: {
      const updated = state.initialState.map((el) =>
        el.id === action.edit.id ? action.edit : el
      );
      state.initialState = updated;
      return state;
    }
    case actiontypes.CLEAR_PROSPECTS: {
      let deleted = state.initialState.filter((elem) => elem.id !== action.payload.id);
      return {
        ...state,
        initialState: deleted,
      };
    }
    case actiontypes.ADD_USER_IN_C2: {
      let addCtwo = [...state.secondState];
      addCtwo.push(action.payload);
      state.secondState = addCtwo;
      return state;
    }
    case actiontypes.EDIT_USER_IN_C2: {
      const updated = state.secondState.map((el) =>
        el.id === action.edit.id ? action.edit : el
      );
      state.secondState = updated;
      return state;
    }
    case actiontypes.DELETE_USER_FROM_C2: {
      let deletedState=[...state.secondState]
      let deleted = deletedState.filter(
        (elem) => elem.id !== action.payload
      );
      return {
        ...state,
        secondState: deleted,
      };
    }
    default:
      return state;
  }
};
