const CURRENT_TIMER = "CURRENT_TIMER";
const SET_CURRENT_TIMER = "SET_CURRENT_TIMER";
const SETUP_ROOM = "SETUP_ROOM";

const currentTimer = current => ({ type: CURRENT_TIMER, payload: current });

const setCurrentTimer = (namespace, seconds) => ({
  type: SET_CURRENT_TIMER,
  payload: { namespace, seconds }
});

const setupRoom = namespace => ({ type: SETUP_ROOM, payload: namespace });

module.exports = {
  CURRENT_TIMER,
  SET_CURRENT_TIMER,
  SETUP_ROOM,
  currentTimer,
  setCurrentTimer,
  setupRoom
};
