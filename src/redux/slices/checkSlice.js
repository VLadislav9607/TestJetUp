import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wordsCheck: [],
  openCheck: false,
  amountCheck: 1,
  rateCheck: []
}

export const checkSlice = createSlice({
  name: 'WordsCheck',
  initialState,
  reducers: {
    setToggleCheck(state, action) {
      state.openCheck = action.payload;
    },
    setWordsCheck(state, action) {
      state.wordsCheck = action.payload;
    },
    setAmountCheck(state, action) {
      state.amountCheck = action.payload;
    },
    setRateCheck(state, action) {
      state.rateCheck.push(action.payload);
    }
  }
})

export const { setToggleCheck, setWordsCheck, setAmountCheck, setRateCheck } = checkSlice.actions;
export const selectCheck = state => state.check;
export default checkSlice.reducer
