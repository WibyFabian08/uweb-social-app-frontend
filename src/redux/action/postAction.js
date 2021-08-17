import axios from "axios";

export const createPost =
  (data, setIsloading, setShowModal, USER, setPostBody, postBody) =>
  (dispatch) => {
    setIsloading(true);
    axios
      .post("http://localhost:3000/posts", data, {
        headers: {
          "Content-Type": "Multipart/Form-Data",
        },
      })
      .then((res) => {
        dispatch(getTimeLine(USER ? USER._id : null));
        setIsloading(false);
        setShowModal(false);
        setPostBody({
          ...postBody,
          desc: "",
          image: "",
        });
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setIsloading(false);
        setShowModal(false);
        setPostBody({
          ...postBody,
          desc: "",
          image: "",
        });
      });
  };

export const deletePost = (data, setShowDelete, USER) => (dispatch) => {
  axios
    .delete(`http://localhost:3000/posts/${data._id}`)
    .then((res) => {
      dispatch(getTimeLine(USER ? USER._id : null));
      setShowDelete(false);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const likePost = (data, USER) => (dispatch) => {
  axios
    .post(`http://localhost:3000/posts/${data ? data._id : ""}`, {
      userId: USER ? USER._id : "",
    })
    .then((res) => {
      dispatch(getTimeLine(USER ? USER._id : null));
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const getTimeLine = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3000/posts/timeline/${id}`)
    .then((res) => {
      dispatch({ type: "SET_TIMELINE", value: res.data.timeline });
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const getMyPost = (username) => (dispatch) => {
  axios
    .get(`http://localhost:3000/posts/profile/${username}`)
    .then((res) => {
      dispatch({ type: "SET_MY_POST", value: res.data.posts });
    })
    .catch((err) => {
      console.log(err);
    });
};
