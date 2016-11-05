var redux = require('redux');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subsribe to change
var unsubscribe = store.subscribe( () =>{
  var state = store.getState();
  console.log('new state', state)
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  }else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View your location</a>'
  }
});

//unsubscribe();
var currentState = store.getState();

store.dispatch(actions.fetchLocation() );

console.log( 'current state', currentState);

store.dispatch( actions.changeName('dle') );

store.dispatch( actions.addHobby('Running') );

store.dispatch( actions.addHobby('Walking') );

store.dispatch( actions.removeHobby(2) );

store.dispatch( actions.addMovie('GodFather', 'drama') );

store.dispatch( actions.changeName('Emily') );

store.dispatch( actions.addMovie('Scarface', 'gangster') );

store.dispatch( actions.removeMovie(1) );
