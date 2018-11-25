const store = require("./server-store");
const { shutUp, currentTimer, SET_CURRENT_TIMER } = require("../commons/actions/index");
const { setupRoom } = require("../commons/actions/index");
const { startCountDown } = require("./actions/countdown");

const namespaces = {};

module.exports = (io, ns) => {
  if (!namespaces[ns]) {
    namespaces[ns] = io.of(ns);
    store.dispatch(setupRoom(ns));

    namespaces[ns].on("connection", socket => {
      const { timer } = store.getState();
      let currTimer = timer.rooms[ns];

      socket.emit("action", currentTimer(currTimer));

      socket.on("action", ({ type, payload }, callback = () => null) => {
        switch (type) {
          case SET_CURRENT_TIMER:
            const { namespace, seconds } = payload;
            return store.dispatch(startCountDown(namespace, seconds));

          default:
            console.warn(`Ignoring action ${type}`);
        }

        store.dispatch(action);
        callback(0);
      });

      store.subscribe(() => {
        const { rooms } = store.getState().timer;
        if (rooms.hasOwnProperty(ns) && rooms[ns] !== currTimer) {
          currTimer = rooms[ns];
          socket.emit("action", currentTimer(currTimer));

          if(currTimer === 0) {
            socket.emit("action", shutUp())
          }
        }
      });
    });
    console.info(`Registered namespace on ${ns}`);
  }

  return namespaces[ns];
};
