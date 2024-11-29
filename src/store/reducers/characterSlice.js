import {createSlice} from '@reduxjs/toolkit';
import {getCharacterList, getSingleCharacter} from './characterActions';

const initialState = {
  characterList: [],
  singleCharacter: null,
  pending: false,
  pendingSingleCharacter: false,
  error: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    changeParams(state, action) {
      state.params = {...state.params, ...action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCharacterList.pending, state => {
        state.pending = true;
      })
      .addCase(getCharacterList.fulfilled, (state, action) => {
        state.characterList = action.payload;
        state.pending = false;
      })
      .addCase(getCharacterList.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
      })
      .addCase(getSingleCharacter.pending, state => {
        state.pendingSingleCharacter = true;
      })
      .addCase(getSingleCharacter.fulfilled, (state, action) => {
        if (action.payload) {
          state.singleCharacter = action.payload;
        } else {
          state.singleCharacter = null; // Beklenmeyen durumda null olarak ayarla.
        }
        state.pendingSingleCharacter = false;
      })
      .addCase(getSingleCharacter.rejected, (state, action) => {
        state.error = action.payload;
        state.pendingSingleCharacter = false;
      });
  },
});

export const {changeParams} = characterSlice.actions;
export default characterSlice.reducer;
