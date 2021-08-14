import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios
    .get("http://localhost:3000/users")
    .then((res) => {
      dispatch({ type: "SET_USERS", value: res.data.users });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = (userId) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/${userId}`)
    .then((res) => {
      dispatch({ type: "SET_USER", value: res.data.user });
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const getUserByName = (username) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/name/${username}`)
    .then((res) => {
      dispatch({ type: "SET_USER", value: res.data.user });
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};
