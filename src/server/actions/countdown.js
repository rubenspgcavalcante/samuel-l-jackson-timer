const { setCurrentTimer } = require("../../commons/actions/index");

const startCountDown = (namespace, startOn) => (dispatch, getState) => {
  dispatch(setCurrentTimer(namespace, startOn));

  const intervalId = setInterval(() => {
    const updated = getState().timer.rooms[namespace] - 1;
    dispatch(setCurrentTimer(namespace, updated));

    if (updated === 0) return clearInterval(intervalId);
  }, 1000);
};

module.exports = { startCountDown };
