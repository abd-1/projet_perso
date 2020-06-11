import { ECRIRE_UN_MESSAGE } from '../actions/message';
import {
  Message1,
  Message3,
  Message5
} from '../components/forumComponents/contentForum/mainContainerForum/conteneurForumPagi/blocMessage/message';
import {
  Message2,
  Message4,
  Message6
} from '../components/forumComponents/contentForum/mainContainerForum/conteneurForumPagi/blocMessage/message';

const initialState = {
  messages: [Message1, Message2, Message3, Message4, Message5, Message6]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ECRIRE_UN_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};
