import React from 'react';
import { AppBar, Toolbar, Button, Link, ButtonGroup } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static' sx={{ borderRadius: 2 }}>
      <Toolbar>
        <Link to='/' variant='h5' component={RouterLink} sx={{ flexGrow: 1 }} color='inherit' underline='none'>
          Dictionary
        </Link>
        <ButtonGroup variant='outlined' color='inherit'>
          <Button component={RouterLink} to='/addNewWord'>
            Add new word
          </Button>
          <Button component={RouterLink} to='/wordsCheck'>
            Words check
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default Header
