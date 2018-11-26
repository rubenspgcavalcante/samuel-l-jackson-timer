const { setCurrentTimer } = require("../../commons/actions/index");

const intervals = {};

const startCountDown = (namespace, startOn) => (dispatch, getState) => {
  if (intervals[namespace]) return false;

  dispatch(setCurrentTimer(namespace, startOn));  
  intervals[namespace] = setInterval(() => {
    const updated = getState().timer.rooms[namespace] - 1;
    dispatch(setCurrentTimer(namespace, updated));

    if (updated === 0) {
      clearInterval(intervals[namespace]);
      intervals[namespace] = null;
    }
  }, 1000);
};

module.exports = { startCountDown };
