import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import api from "~/api";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "SIGNUP":
      return {
        errorMessage: "",
        token: action.payload,
      };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "SIGNUP",
        payload: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "SIGNIN",
        payload: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };

const logout =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("/logout", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGOUT",
        payload: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, logout },
  { token: null, errorMessage: "" }
);
