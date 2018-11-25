import { CURRENT_TIMER, SHUT_UP } from "../../commons/actions";

export default (
  state = {
    current: null,
    shutUp: false
  },
  { type, payload }
) => {
  switch (type) {
    case CURRENT_TIMER:
      return { ...state, current: payload };

    case SHUT_UP:
      return { ...state, shutUp: true };

    default:
      return state;
  }
};
