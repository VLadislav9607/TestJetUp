import React from 'react';
import WordItem from './WordItem';
import { useSelector } from 'react-redux'
import { Skeleton } from '@mui/material';
import { selectWords } from '../redux/slices/wordsSlice';

const WordList = () => {
  const { words, status } = useSelector(selectWords);

  return (
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
      {words.map((word) => {
        return (
          status === 'success' ? <WordItem word={word} key={word.id}/> : <Skeleton variant='text' width={400} height={50}/>
        )
      })}
    </ul>
  )
}

export default WordList
