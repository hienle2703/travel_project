import { firebaseApp } from "../../components/FirebaseConfig.js";
import * as firebase from "firebase";
export const types = {
  GET_PROFILE: "GET_PROFILE",
};

export const actions = {
  get_all_profile: () => {
    return async (dispatch) => {
      const itemRef = firebaseApp.database();
      const itemRef1 = firebaseApp.auth().currentUser;
      const split = itemRef1.email;
      const splitted = await split.substring(0, split.lastIndexOf("@"));
      const user =  firebaseApp.database().ref("user").child(splitted);
      const snapshot = await user.child("name").once("value");
      const snapshot1 = await user.child("email").once("value");
      const snapshot2 = await user.child("phone").once("value");
      const snapshot3 = await user.child("ava").once("value");

      let name = snapshot.val();
      let email = snapshot1.val();
      let phone = snapshot2.val();
      let ava = snapshot3.val();

      let obj = { name, email, phone, ava, user };
      dispatch({
        type: types.GET_PROFILE,
        payload: {
          data: obj,
        },
      });
    };
  },
};
const initialState = {
  data: null,
  type: null,
};

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILE: {
      return {
        type: types.GET_PROFILE,
        data: payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
