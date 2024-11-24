// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'; // Make sure the path is correct

// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
import {configureStore} from '@reduxjs/toolkit';
import characterSlice from './characterSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: characterSlice,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(thunk),
});

export default store;
