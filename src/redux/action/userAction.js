import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios
    .get("http://localhost:3000/users")
    .then((res) => {
      dispatch({type: 'SET_USERS', value: res.data.users});
    })
    .catch((err) => {
      console.log(err);
    });
};
