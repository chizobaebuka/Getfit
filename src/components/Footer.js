import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff2f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="logo" width="300px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Download now and start your fitness journey with us! Let's reach your goals together.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer