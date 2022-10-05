import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../Assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}}}
        position="relative" p="20px">
            <Typography color="Black"
            fontWeight="600" fontSize="26px">
                Fitness IQ
            </Typography>
            <Typography fontweight={700}
            sx={{ fontSize: { lg: '44px', xs: '40px'}}}
            mb="23px" mt="30px">
                Workout smarter not harder
            </Typography>
            <Typography fontSize="22px" 
            LineHeight="35px" mb={3}>
                Learn the most effective exercises
            </Typography>
            <Button variant="contained"
            color="error" href="#exercises"
            sx={{ backgroundColor: 'blue',
            padding: '10px'}}>
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="black"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize="200px">
                    Exercises
                </Typography>
            <img src={HeroBannerImage} alt="banner"
            className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner;