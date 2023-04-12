import React from 'react';
import axios from 'axios';
import { Btn } from '../UI/Btn';
import { Input } from '../UI/Input';
import { useSelector, useDispatch } from 'react-redux';
import { setInputWords, setInputTranslate, selectNewWord } from '../redux/slices/addWordSlice';
import { setWords } from '../redux/slices/wordsSlice';
import Header from '../components/Header';
import { Alert, Box, Container, Typography } from '@mui/material';


const AddNewWord = () => {
  const dispatch = useDispatch();
  const { newWordInput, translateInput } = useSelector(selectNewWord);
  const [openAlert, setOpenAlert] = React.useState(false)

  const onChangeInputWord = (value) => {
    dispatch(setInputWords(value))
  }

  const onChangeInputTranslate = (value) => {
    dispatch(setInputTranslate(value))
  }

  const onAddWord = (event) => {
    event.preventDefault();
    const res = {
      name: newWordInput,
      translate: translateInput,
    }
    dispatch(setWords(res));
    dispatch(setInputWords(''))
    dispatch(setInputTranslate(''))
    setOpenAlert(true)
    axios.post('https://63f255ebf28929a9df58a99e.mockapi.io/dectionary', res)
  };

  return (
    <>
      <Header />
      <Box sx={{ height: '100vh', mt: 1, borderRadius: 2, p: '20px 50px' }}>
        {openAlert &&
          <Alert
            severity="success"
            color="info"
            onClose={() => setOpenAlert(false)}>
            New word added successfully!
          </Alert>}
        <Typography variant='h3' textAlign='center'>
          Add a new word
        </Typography>
        <Container
          component='form'
          onSubmit={onAddWord}
          maxWidth='sm'
          sx={{ height: '60vh', mt: 4, borderRadius: 3 }}>
          <Input
            value={newWordInput}
            name='newWord'
            label="New word"
            onChange={(e) => onChangeInputWord(e.target.value)}
            autoFocus />
          <Input
            value={translateInput}
            name='translate'
            label="Translate"
            onChange={(e) => onChangeInputTranslate(e.target.value)} />
          <Btn type='submit'>Add word</Btn>
        </Container>
      </Box>
    </>
  )
}

export default AddNewWord
