const { SET_CURRENT_TIMER, SETUP_ROOM } = require("../../commons/actions/index");

module.exports = (
  state = {
    rooms: {}
  },
  { type, payload }
) => {
  switch (type) {
    case SETUP_ROOM:
      return {
        ...state,
        rooms: { [payload]: 0, ...state.rooms }
      };

    case SET_CURRENT_TIMER:
      return {
        ...state,
        rooms: { ...state.rooms, [payload.namespace]: payload.seconds }
      };

    default:
      return state;
  }
};
