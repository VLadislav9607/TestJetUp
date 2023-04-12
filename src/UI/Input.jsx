import React from 'react'
import { TextField } from '@mui/material';

export const Input = (props) => {
  return (
    <TextField fullWidth type='text' margin='normal' required {...props} />
  )
}
