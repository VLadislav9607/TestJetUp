import React from 'react'
import { Button } from '@mui/material';

export const AnswerItem = (props) => {
  return (
    <Button
      sx={{ backgroundColor: '#e6effd', borderRadius: 4, p: 2, mb: 2, cursor: 'pointer' }}
      variant='outlined'
      fullWidth
      {...props}
    >
    </Button>
  )
}
