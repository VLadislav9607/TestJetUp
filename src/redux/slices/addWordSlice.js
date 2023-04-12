import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newWordInput: '',
  translateInput: ''
}

export const addWordSlice = createSlice({
  name: 'newWord',
  initialState,
  reducers: {
    setInputWords(state, action) {
      state.newWordInput = action.payload
    },
    setInputTranslate(state, action) {
      state.translateInput = action.payload
    }
  }
})

export const { setInputWords, setInputTranslate } = addWordSlice.actions;
export const selectNewWord = state => state.newWord;
export default addWordSlice.reducer
