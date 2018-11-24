import io from "socket.io-client";

const connections = {};

export const getSocket = namespace =>
  (connections[namespace] = connections[namespace] || io(namespace));

export const listener = namespace => (on, callback) =>
  getSocket(namespace).on(on, callback);

export const emitter = namespace => (type, data) => getSocket(namespace).emit(type, data);
