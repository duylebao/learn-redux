var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
// pure function
var reducer = (state = stateDefault, action) => {
  // ES5 default def
  //state = state || {name: 'Anonymous'};
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
    };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter( (movie) => movie.id !== action.id)
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
  console.log('new state', state)
});

//unsubscribe();
var currentState = store.getState();

console.log( 'current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'dle'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'GodFather',
  genre: 'drama'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Scarface',
  genre: 'gangster'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
