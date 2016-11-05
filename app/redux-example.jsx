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
var store = redux.createStore( reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
) );
// subsribe to change
var unsubscribe = store.subscribe( () =>{
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

//unsubscribe();
var currentState = store.getState();

console.log( 'current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'dle'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
})
