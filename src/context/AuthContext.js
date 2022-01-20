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
    case "LOGIN":
      return {
        errorMessage: "",
        token: action.payload,
      };
    case "LOGOUT":
      return {
        errorMessage: "",
        token: null,
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

const login =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN",
        payload: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: `Something went wrong with login`,
      });
    }
  };

const logout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { token: null, errorMessage: "" }
);
