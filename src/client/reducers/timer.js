import {CURRENT_TIMER} from "../../commons/actions";

export default (
  state = {
    current: null
  },
  { type, payload }
) => {
  switch (type) {
    case CURRENT_TIMER:
      return { ...state, current: payload };

    default:
      return state;
  }
};
