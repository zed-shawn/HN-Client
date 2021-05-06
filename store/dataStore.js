import * as link from "../components/connections/apliLinks";

const initialState = {
  bestIDs: [],
  topIDs: [],
  newIDs: [],
};

const ADD_BEST_IDS = "addBestIDs";
const ADD_TOP_IDS = "addTopIDs";
const ADD_NEW_IDS = "addNewIDs";

const getDetail = async (id) => {
  const itemLink = link.itemDetail + `${id}` + ".json";
  let response = await fetch(itemLink);
  let data = await response.json();
  const obj = {
    username: data.by,
    type: data.type,
    upvotes: data.score,
    comments: data.descendants,
    title: data.title,
    time: data.time,
    key: id,
    url: data.url,
  };
  return obj;
};

export function addBestIDs(data) {
  return async (dispatch) => {
    try {
      let diff = 0;
      const bestIDObj = [];
      for (let i = 0; i < data.length; i++) {
        const obj = await getDetail(data[i]);
        bestIDObj.push(obj);
        diff++;
        if (diff > 7) {
          dispatch({
            type: ADD_BEST_IDS,
            payload: { bestIDObj },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function addTopIDs(data) {
  return async (dispatch) => {
    try {
      let diff = 0;
      const topIDObj = [];
      for (let i = 0; i < data.length; i++) {
        const obj = await getDetail(data[i]);
        topIDObj.push(obj);
        diff++;
        if (diff > 7) {
          dispatch({
            type: ADD_TOP_IDS,
            payload: { topIDObj },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function addNewIDs(data) {
  return async (dispatch) => {
    try {
      let diff = 0;
      const newIDObj = [];
      for (let i = 0; i < data.length; i++) {
        const obj = await getDetail(data[i]);
        newIDObj.push(obj);
        diff++;
        if (diff > 7) {
          dispatch({
            type: ADD_NEW_IDS,
            payload: { newIDObj },
          });
        }
      }
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
        bestIDs: action.payload.bestIDObj,
      };
    case ADD_TOP_IDS:
      return {
        ...state,
        topIDs: action.payload.topIDObj,
      };
    case ADD_NEW_IDS:
      return {
        ...state,
        newIDs: action.payload.newIDObj,
      };
    default:
      return state;
  }
};

export default dataReducer;
