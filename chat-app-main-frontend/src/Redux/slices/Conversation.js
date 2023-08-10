import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { faker } from "@faker-js/faker";

const user_id = window.localStorage.getItem("user_id")

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_message: [],
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.conversations.map((el) => {
        const this_user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );

        return {
            id: el._id,
            user_id : this_user._id,
            name: `${this_user.firstName} ${this_user.lastName}`,
            online: user_id.status === 'Online',
            img: faker.image.avatar(),
            msg: faker.music.songName(),
            time: "9:36",
            unread: 0,
            pinned: false
        }
      });
      state.direct_chat.conversations = list;
    },
  },
});

export default slice.reducer;

export const fetchDirectConversation = ({conversations}) => {
    return async (dispatch, getState) => {
      console.log("conversations are", conversations)
        dispatch(slice.actions.fetchDirectConversations({conversations}))
    }
}
