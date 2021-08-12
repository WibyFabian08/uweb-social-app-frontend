import axios from "axios";

export const getTimeLine = (_id) => (dispatch) => {
  axios
    .get(`http://localhost:3000/posts/timeline/${_id}`)
    .then((res) => {
      dispatch({type: 'SET_TIMELINE', value: res.data.timeline});
    })
    .catch((err) => {
      console.log(err);
    });
};
