import { Box, Stack, Typography } from '@mui/material';

const WordItem = ({ word }) => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', borderRadius: 4, p: 2, mb: 2 }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='body1'>{word.name}</Typography>
        <Typography variant='body1'>{word.translate}</Typography>
      </Stack>
    </Box>
  )
}

export default WordItem
