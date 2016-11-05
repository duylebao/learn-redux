var redux = require('redux');

console.log('starting redux example');

// pure function
var reducer = (state = {name: 'Anonymous'}, action) => {
  // ES5 default def
  //state = state || {name: 'Anonymous'};
  return state;
};
var store = redux.createStore( reducer );

var currentState = store.getState();

console.log( 'current state', currentState);
