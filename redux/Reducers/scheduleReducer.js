const scheduleData = [
  {
    id: 1,
    imgSource:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/01/kinh-nghiem-du-lich-da-lat-ban-can-luu-lai-1.png",
    name: "Da Lat For Life",
    start: "HCM",
    end: "Da Lat",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 2,
    imgSource:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg",
    name: "Hoi An Vintage Town",
    start: "HCM",
    end: "Hoi An",
    member: "4",
    date: "14/6 to 18/6",
  },
  {
    id: 3,
    imgSource:
      "https://aroma.vn/wp-content/uploads/2018/11/aafed9d6-h%C3%A0-n%E1%BB%99i.jpg",
    name: "Viet Nam Capital",
    start: "HCM",
    end: "Ha Noi",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 4,
    imgSource:
      "https://tour.dulichvietnam.com.vn/uploads/tour/1553224096_sapa-5.jpg",
    name: "The City In The Fog",
    start: "HCM",
    end: "Sapa",
    member: "4",
    date: "14/6 to 17/6",
  },
  {
    id: 5,
    imgSource:
      "https://saigonstartravel.com/wp-content/uploads/2019/03/26-2.jpg",
    name: "Get Some Vitamin Sea",
    start: "HCM",
    end: "Vung Tau",
    member: "4",
    date: "14/6 to 17/6",
  },
];

export const types = {
  GET_ALL_SCHEDULE: "GET_ALL",
};

export const actions = {
  get_all_schedule: () => {
    return async (dispatch) => {
      dispatch({
        type: types.GET_ALL_SCHEDULE,
        payload: {
          data: scheduleData,
        },
      });
    };
  },
};

const initialState = {
  data: null,
  type: null,
};

export const scheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case types.GET_ALL_SCHEDULE: {
      return {
        type: types.GET_ALL_SCHEDULE,
        data: payload.data,
      };
    }

    default: {
      return state;
    }
  }
};
