import React from 'react';
import { selectCheck, setToggleCheck, setWordsCheck } from '../redux/slices/checkSlice';
import { selectWords } from '../redux/slices/wordsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Stack, Typography } from '@mui/material'
import { mixArr } from '../utils/mixArr';
import { getCalcRate } from '../utils/getCalcRate';
import Check from '../components/Check';
import Header from '../components/Header';
import { Btn } from '../UI/Btn';

const WordsCheck = () => {
  const dispatch = useDispatch();
  const { openCheck } = useSelector(selectCheck)
  const { words } = useSelector(selectWords);

  React.useEffect(() => {
    const wordsCheck = mixArr(words)
    dispatch(setWordsCheck(wordsCheck))
  }, [openCheck]);

  const totalRate = getCalcRate();

  const onClickStartCheck = () => {
    dispatch(setToggleCheck(!openCheck))
  }

  return (
    <>
      <Header />
      <Box sx={{ height: '100vh', mt: 5 }}>
        <Container maxWidth='sm' sx={{ mt: 3, borderRadius: 3 }}>
          <Typography variant='h5' textAlign='center'>
            Do you know your words well? Check yourself
          </Typography>
          <Typography variant='subtitle1' textAlign='center'>
            You must have at least 10 words in your dectionary
          </Typography>
          <Btn onClick={() => onClickStartCheck()}>start checking</Btn>
        </Container>
        {openCheck && <Check />}
        <Box backgroundColor='#1976d2' width={600} margin='100px auto' borderRadius='20px' p={2}>
          <Typography variant='h5' textAlign='center' color='white' marginBottom={3}>Your history check</Typography>
          <Stack direction='row' spacing={2} justifyContent='space-between' backgroundColor='white' p={2}>
            <Typography variant='h6' >{`Amount of your checks: ${localStorage.getItem('amount') || 0}`}</Typography>
            <Typography variant='h6' >{`Average success rate: ${totalRate}%`}</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default WordsCheck
