import { configureStore } from '@reduxjs/toolkit'
import newWord from './slices/addWordSlice'
import words from './slices/wordsSlice';
import check from './slices/checkSlice';

export const store = configureStore({
  reducer: {
    newWord,
    words,
    check
  }
})
