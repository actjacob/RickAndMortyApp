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
      console.log('Single Character API Response:', response.data); // Yanıtı loglayın.
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
