import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const AuthContext = (state, actions) => {
  switch (actions.type) {
    case "Sign-up":
      return { ...state, token: actions.payload , errorMessage : null};

    case "Sign-up-error":
      return { ...state, errorMessage: actions.payload };

    default:
      return state;
  }
};

const SignIn = (dispatch) => {
  return () => {};
};

const SignUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "Sign-up", payload: res.data.token });
    } catch (e) {
      dispatch({ type: "Sign-up-error", payload: `${e}` });
    }
  };
};

const SignOut = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  AuthContext,
  { SignIn, SignUp, SignOut },
  { token: null, errorMessage: null }
);
