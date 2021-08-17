import axios from "axios";

export const getUsers = (setUsers) => (dispatch) => {
  axios
    .get("http://localhost:3000/users")
    .then((res) => {
      dispatch({ type: "SET_USERS", value: res.data.users });
      setUsers(res.data.users);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const getUser = (userId, setUser) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/${userId}`)
    .then((res) => {
      dispatch({ type: "SET_USER", value: res.data.user });
      setUser(res.data.user);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const getUserByName = (username, setUser) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/name/${username}`)
    .then((res) => {
      setUser(res.data.user);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const updateProfilePicture = (user, data, setUser) => (dispatch) => {
  axios
    .put(`http://localhost:3000/users/${user._id}`, data, {
      headers: {
        "Content-Type": "Multipart/Form-Data",
      },
    })
    .then((res) => {
      dispatch({ type: "SET_USER", value: res.data.user });
      setUser(res.data.user);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const updateCoverPicture = (user, data, setUser) => (dispatch) => {
  axios
    .put(`http://localhost:3000/users/${user._id}/cover`, data, {
      headers: {
        "Content-Type": "Multipart/Form-Data",
      },
    })
    .then((res) => {
      dispatch({ type: "SET_USER", value: res.data.user });
      setUser(res.data.user);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const follow = (id, ACTIVEUSER, getHeaderProfile, setIsLoading) => (dispatch) => {
    setIsLoading(true);
    axios
      .post(`http://localhost:3000/users/follow/${id}`, {
        userId: ACTIVEUSER ? ACTIVEUSER?._id : "",
      })
      .then((res) => {
        getHeaderProfile();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message)
        setIsLoading(false);
      });
  };

export const unFollow = (id, ACTIVEUSER, getHeaderProfile, setIsLoading) => (dispatch) => {
    setIsLoading(true);
    axios
      .post(`http://localhost:3000/users/unfollow/${id}`, {
        userId: ACTIVEUSER ? ACTIVEUSER?._id : "",
      })
      .then((res) => {
        getHeaderProfile();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
