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
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.text
      };
    default:
      return state;
  }
  return state;
};

var store = redux.createStore( reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
) );

// subsribe to change
var unsubscribe = store.subscribe( () =>{
  var state = store.getState();
  console.log('Search text is', state.searchText);
  document.getElementById('app').innerHTML = state.name;
});

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  text: 'new search text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  text: 'new search text two'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  text: 'last changes to text'
});
