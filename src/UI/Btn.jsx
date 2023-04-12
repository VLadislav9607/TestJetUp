import React from 'react'
import { Button } from '@mui/material';

export const Btn = (props) => {
  return (
    <Button variant='contained' size='large' fullWidth sx={{ mt: 3 }}  {...props} />
  )
}
