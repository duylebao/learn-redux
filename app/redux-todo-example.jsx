var redux = require('redux');

console.log('starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
// pure function
var reducer = (state = stateDefault, action) => {
  // ES5 default def
  //state = state || {name: 'Anonymous'};
  return state;
};
var store = redux.createStore( reducer );

var currentState = store.getState();

console.log( 'current state', currentState);
