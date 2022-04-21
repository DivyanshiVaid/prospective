import * as actiontypes from "../Actions/prospectsAction";
const initial = {
  initialState: [
    {
      id: new Date().getTime()+"",
      name: "abc",
      dob: " 01-01-2000",
      country: "India",
      status: false,
    },
  ],
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
      let deleted = state.initialState.filter((elem) => elem.id !== action.del);
      state = deleted;
      return state;
    }
    case actiontypes.EDIT_USER: {
      const updated = state.initialState.map((el) =>
        el.id === action.edit.id ? action.edit : el
      );
      state.initialState = updated;
      return state;
    }

    case actiontypes.CLEAR_PROSPECTS: {
      console.log("gggggggggg",action.payload)
      let deleted = state.initialState.filter((elem) => elem.id !== action.payload.id);
      console.log("deleted",deleted)
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
      let deleted = state.secondState.filter(
        (elem) => elem.id !== action.payload.id
      );
      state = deleted;
      return state;
    }

    default:
      return state;
  }
};
