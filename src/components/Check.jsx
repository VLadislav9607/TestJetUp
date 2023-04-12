import React from 'react'
import { Modal, Box, Typography, LinearProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { setToggleCheck, setRateCheck, setAmountCheck, selectCheck } from '../redux/slices/checkSlice';
import { AnswerItem } from '../UI/AnswerItem';
import { mixArr } from '../utils/mixArr';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Check = () => {
  const dispatch = useDispatch();
  const { openCheck, wordsCheck, amountCheck } = useSelector(selectCheck)
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const [checkComplete, setCheckComplete] = React.useState(false);

  const onClickVariant = (answer, trueAnswer) => {
    //If last question
    if (currentQuestion === wordsCheck.length - 1) {
      dispatch(setAmountCheck(amountCheck + 1))
      dispatch(setRateCheck(points * 10))
      localStorage.setItem('amount', amountCheck)
      localStorage.setItem('rate', JSON.stringify([points * 10]))
      setCheckComplete(true)
    } else {
      setCurrentQuestion(prev => prev + 1)
    }

    if (trueAnswer.translate === answer.translate) {
      setPoints(prev => prev + 1)
    }
  }

  //Mix answers for check
  const result = wordsCheck.filter(item => Number(item.id) !== Number(wordsCheck[currentQuestion].id))
  const newArray = mixArr(result).slice(0, 3);
  const res = [...newArray, wordsCheck[currentQuestion]]
  const answerArray = mixArr(res);

  return (
    <Modal
      open={openCheck}
      onClose={() => dispatch(setToggleCheck(!openCheck))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {!checkComplete
          ?
          <>
            <Box
              sx={{ width: '100%', mb: 3 }}>
              <LinearProgress
                variant="determinate"
                value={currentQuestion * 10} />
            </Box>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign='center'>
              {`${wordsCheck[currentQuestion]?.name.toUpperCase()} it?`}
            </Typography>
            <Box mt={3}>
              {answerArray?.map(wordAnswer => {
                return (
                  <AnswerItem
                    key={wordAnswer.id}
                    onClick={() => onClickVariant(wordAnswer, wordsCheck[currentQuestion])}
                  >
                    {wordAnswer.translate}
                  </AnswerItem>
                )
              })}
            </Box>
          </>
          :
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h3"
            textAlign='center'>
            {`You gave ${points * 10}% of the correct answers`}
          </Typography>
        }
      </Box>
    </Modal >
  )
}

export default Check
