const initialState = {
  readIDs: [],
};

const ADD_READ_IDS = "addReadIDs";

export function addReadIDs(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_READ_IDS,
        payload: { id },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_READ_IDS:
      let updatedArray = state.readIDs;
      updatedArray.push(action.payload.id);
      return {
        ...state,
        bestIDs: updatedArray,
      };
    default:
      return state;
  }
};

export default dataReducer;
