import {configureStore} from '@reduxjs/toolkit';
import characterSlice from './characterSlice';

const rootSlice = configureStore({
  characters: characterSlice,
});

export default rootSlice;
