import { scheduleData, postData } from "../Reducers/data/fakeData_PostSche";

export const types = {
  GET_ALL: "GET_ALL",
};

export const actions = {
  get_all: () => {
    return async (dispatch) => {
      dispatch({
        type: types.GET_ALL,
        payload: {
          data: { postData, scheduleData },
        },
      });
    };
  },
};

const initialState = {
  data: null,
  type: null,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL: {
      return {
        type: types.GET_ALL,
        data: payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
