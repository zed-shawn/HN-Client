const initialState = {
  bestIDs: [],
  topIDs: [],
  newIDs: [],
};

const ADD_BEST_IDS = "addBestIDs";
const ADD_TOP_IDS = "addTopIDs";
const ADD_NEW_IDS = "addNewIDs";

export function addBestIDs(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_BEST_IDS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function addTopIDs(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_TOP_IDS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function addNewIDs(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_NEW_IDS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEST_IDS:
      return {
        ...state,
        bestIDs: action.payload.data,
      };
    case ADD_TOP_IDS:
      return {
        ...state,
        topIDs: action.payload.data,
      };
    case ADD_NEW_IDS:
      return {
        ...state,
        newIDs: action.payload.data,
      };
    default:
      return state;
  }
};

export default dataReducer;
