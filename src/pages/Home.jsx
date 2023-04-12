import { Box, Container, Pagination, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import WordList from '../components/WordList'
import { fetchDectionary, selectWords, setPageAction } from '../redux/slices/wordsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();
  const { pageAction } = useSelector(selectWords)

  React.useEffect(() => {
    try {
      dispatch(fetchDectionary(String(pageAction)));
    } catch (error) {
      console.log(error);
      alert('Error server')
    }
  }, [pageAction]);

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f8f4f4', height: '100%', mt: 1, borderRadius: 2, p: '20px 50px' }}>
        <Typography variant='h3' textAlign='center'>
          My dectionary
        </Typography>
        <Container maxWidth='md' sx={{ height: '70vh', mt: 4, position: 'relative' }}>
          <WordList />
          <div style={{ left: '50%', transform: 'translate(-50%, 50%)', position: 'absolute', bottom: 20, }}>
            <Pagination
              count={100}
              page={pageAction}
              onChange={(_, numPage) => dispatch(setPageAction(numPage))}
              color='primary'
            />
          </div>
        </Container>
      </Box>
    </>
  )
}

export default Home
