import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchDectionary = createAsyncThunk(
  'dectionary/fetchDectionary',
  async (pageAction) => {
    const { data } = await axios.get(`https://63f255ebf28929a9df58a99e.mockapi.io/dectionary?page=${pageAction}&limit=10&`);
    return data;
  }
)

const initialState = {
  words: [],
  status: 'loading',
  pageAction: 1
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWords(state, action) {
      state.words.push({ ...action.payload })
    },
    setPageAction(state, action) {
      state.pageAction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDectionary.pending, (state) => {
      state.status = 'loading';
      state.words = [];
    });

    builder.addCase(fetchDectionary.fulfilled, (state, action) => {
      state.status = 'success';
      state.words = action.payload;
    });

    builder.addCase(fetchDectionary.rejected, (state) => {
      state.status = 'error';
      state.words = [];
    });
  }
})

export const { setWords, setPageAction } = wordsSlice.actions;
export const selectWords = state => state.words;
export default wordsSlice.reducer
