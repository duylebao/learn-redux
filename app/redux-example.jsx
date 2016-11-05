var redux = require('redux');

console.log('starting redux example');

// pure function
var reducer = (state = {name: 'Anonymous'}, action) => {
  // ES5 default def
  //state = state || {name: 'Anonymous'};
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore( reducer );

var currentState = store.getState();

console.log( 'current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'dle'
});

console.log('Name should be dle', store.getState());
