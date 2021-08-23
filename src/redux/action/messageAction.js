import axios from "axios";

export const newConversation =
  (ACTIVEUSER, friendId, setConversation) => (dispatch) => {
    axios
      .post("http://localhost:3000/conversations", {
        senderId: ACTIVEUSER._id,
        receiverId: friendId,
      })
      .then((res) => {
        axios
          .get(`http://localhost:3000/conversations/${ACTIVEUSER._id}`)
          .then((res) => {
            setConversation(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getConversationList =
  (ACTIVEUSER, setConversation) => (dispatch) => {
    axios
      .get(`http://localhost:3000/conversations/${ACTIVEUSER._id}`)
      .then((res) => {
        setConversation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getOneConversation =
  (ACTIVEUSER, friendId, setCurrentConversation) => (dispatch) => {
    axios
      .get(
        `http://localhost:3000/conversations/find/${ACTIVEUSER._id}/${friendId}`
      )
      .then((res) => {
        setCurrentConversation(res.data.conversation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getMessages = (currentConversation, setMessages) => (dispatch) => {
  axios
    .get(
      `http://localhost:3000/messages/${
        currentConversation && currentConversation?._id
      }`
    )
    .then((res) => {
      setMessages(res.data.messages);
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
    });
};

export const sendMessage =
  (currentConversation, ACTIVEUSER, text, messages, setMessages, setText) =>
  (dispatch) => {
    axios
      .post("http://localhost:3000/messages", {
        conversationId: currentConversation._id,
        senderId: ACTIVEUSER._id,
        text: text,
      })
      .then((res) => {
        setMessages([...messages, res.data.message]);
        setText("");
      })
      .catch((err) => {
        console.log(err);
        setText("");
      });
  };

export const getChatList = (friendId, setConversationList) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/${friendId}`)
    .then((res) => {
      setConversationList(res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOnlineFriends = (data, setOnlineUser) => (dispatch) => {
  axios
    .get(`http://localhost:3000/users/${data}`)
    .then((res) => {
      setOnlineUser(res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });
};
