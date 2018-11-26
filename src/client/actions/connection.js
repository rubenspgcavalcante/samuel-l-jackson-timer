import { LISTEN_ACTIONS_START, EMIT_ACTION, INCOMMING_ACTION } from ".";
import { listener, emitter } from "../utils/io-connector";

export const emitAction = (roomId, action) => dispatch => {
  const emit = emitter(roomId);
  emit("action", action);

  dispatch({ type: EMIT_ACTION, payload: action });
};

export const listenActions = roomId => dispatch =>
  fetch(location.href, {
    method: "POST"
  }).then(res => {
    const room = listener(roomId);
    dispatch({ type: LISTEN_ACTIONS_START, payload: roomId });
    room("action", action => dispatch(action));
  });
