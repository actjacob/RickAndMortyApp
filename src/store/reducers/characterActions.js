// import {CHARACTERS_URL} from '../../service/baseUrl';
// import {getRequest} from '../../service/verbs';
// import {
//   CHANGE_PARAMS,
//   CHARACTERS_REJECT,
//   FETCH_CHARACTERS,
//   FETCH_SINGLECHARACTER,
//   PENDING_CHARACTERS,
//   PENDING_SINGLECHARACTER,
//   SINGLECHARACTER_REJECT,
// } from '../types/characterTypes';

// export const getCharacterList = params => {
//   return async dispatch => {
//     dispatch({type: PENDING_CHARACTERS});
//     try {
//       const response = await getRequest(CHARACTERS_URL, params);
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: response.data.results,
//       });
//     } catch (error) {
//       dispatch({type: CHARACTERS_REJECT, error: error});
//     }
//   };
// };

// export const getSingleCharacter = characterID => {
//   const url = `${CHARACTERS_URL}/${characterID}`;

//   return async dispatch => {
//     dispatch({type: PENDING_SINGLECHARACTER});
//     try {
//       const response = await getRequest(url);
//       dispatch({
//         type: FETCH_SINGLECHARACTER,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({type: SINGLECHARACTER_REJECT, error: error});
//     }
//   };
// };
// export const changeParams = params => {
//   return async dispatch => {
//     dispatch({type: CHANGE_PARAMS, params: params});
//   };
// };
import {createAsyncThunk} from '@reduxjs/toolkit';
import {CHARACTERS_URL} from '../../service/baseUrl';
import {getRequest} from '../../service/verbs';

export const getCharacterList = createAsyncThunk(
  'characters/getCharacterList',
  async (params, {rejectWithValue}) => {
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const getSingleCharacter = createAsyncThunk(
  'characters/getSingleCharacter',
  async (characterID, {rejectWithValue}) => {
    const url = `${CHARACTERS_URL}/${characterID}`;
    try {
      const response = await getRequest(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

export const changeParams = createAsyncThunk(
  'characters/changeParams',
  async (params, {rejectWithValue}) => {
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      return response.data.results;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
