const { createStore, applyMiddleware, compose } = require("redux");
const thunk = require("redux-thunk").default;
const rootReducer = require("./reducers/index");

module.exports = createStore(rootReducer, compose(applyMiddleware(thunk)));
