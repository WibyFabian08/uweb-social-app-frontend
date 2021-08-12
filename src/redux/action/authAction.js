import axios from "axios";

export const masuk = (data, history, notify) => (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  axios
    .post("http://localhost:3000/auth/login", data)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({type: 'SET_USER', value: res.data.user})
      dispatch({ type: "SET_ERROR", value: null });
      dispatch({ type: "SET_LOADING", value: false });
      history.push("/");
    })
    .catch((err) => {
      dispatch({ type: "SET_ERROR", value: err?.response?.data?.message });
      dispatch({ type: "SET_LOADING", value: false });
      notify();
    });
};

export const logout = (history) => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "SET_ERROR", value: null });
  history.push("/login");
};

export const daftar = (data, notify, history) => (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  axios
    .post("http://localhost:3000/auth/register", data)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({type: 'SET_USER', value: res.data.user})
      dispatch({ type: "SET_ERROR", value: null });
      dispatch({ type: "SET_LOADING", value: false });
      history.push("/");
    })
    .catch((err) => {
      dispatch({ type: "SET_ERROR", value: err?.response?.data?.message });
      dispatch({ type: "SET_LOADING", value: false });
      notify();
    });
};
