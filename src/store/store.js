// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'; // Make sure the path is correct

// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
import {configureStore} from '@reduxjs/toolkit';
import characterReducer from './reducers/characterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducer, // Reducer bir obje içinde tanımlanmalı.
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
