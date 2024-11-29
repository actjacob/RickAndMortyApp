// import {createSlice} from '@reduxjs/toolkit';
// import {
//   CHANGE_PARAMS,
//   CHARACTERS_REJECT,
//   FETCH_CHARACTERS,
//   FETCH_SINGLECHARACTER,
//   PENDING_CHARACTERS,
//   PENDING_SINGLECHARACTER,
//   SINGLECHARACTER_REJECT,
// } from '../types/characterTypes';
// import {getCharacterList, getSingleCharacter} from './characterActions';

// const initialState = {
//   characterList: [],
//   singleCharacter: [],
//   pending: false,
//   pendingSingleCharacter: true,
//   errorSingleCharacter: null,
//   params: {
//     page: 1,
//     status: null,
//     gender: null,
//     name: null,
//   },
// };

// const characterSlice = (state = initialState, action) => {
//   switch (action.type) {
//     case PENDING_CHARACTERS:
//       return {
//         ...state,
//         pending: true,
//       };
//     case FETCH_CHARACTERS:
//       return {
//         ...state,
//         characterList: action.payload,
//         pending: false,
//       };
//     case CHARACTERS_REJECT:
//       return {
//         ...state,
//         pending: false,
//         error: action.error,
//       };
//     case PENDING_SINGLECHARACTER:
//       return {
//         ...state,
//         pendingSingleCharacter: true,
//       };
//     case FETCH_SINGLECHARACTER:
//       return {
//         ...state,
//         singleCharacter: action.payload,
//         pendingSingleCharacter: false,
//       };
//     case SINGLECHARACTER_REJECT:
//       return {...state, errorSingleCharacter: action.error};
//     case CHANGE_PARAMS:
//       return {
//         ...state,
//         params: {
//           ...state.params,
//           ...action.params,
//         },
//       };
//     default:
//       return state;
//   }
// };
// export default characterSlice;
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
        state.singleCharacter = action.payload;
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
