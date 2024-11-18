import React from 'react';
import { Box, Typography } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite'; 
import AmbulanceIcon from '@mui/icons-material/LocalHospital'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; 
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 

const services = [
  { icon: <HeartIcon sx={{ fontSize: "40px" }} />, title: 'Хизматрасонии тиббӣ' },
  { icon: <AmbulanceIcon sx={{ fontSize: "40px" }} />, title: 'Ёрии таъҷилӣ' },
  { icon: <CheckCircleIcon sx={{ fontSize: "40px" }} />, title: 'САБИМ' },
  { icon: <CalendarTodayIcon sx={{ fontSize: "40px" }} />, title: 'Системаи сабти онлайн' },
  { icon: <InfoIcon sx={{ fontSize: "40px" }} />, title: 'Маълумот гирифтан' },
  { icon: <HealthAndSafetyIcon sx={{ fontSize: "40px" }} />, title: 'Саломатии Тоҷикистон' },
];

function BlurMenu() {
  return (
    <Box display="flex" justifyContent="center" p={2} position="relative">
      <Box
        sx={{
          position: 'absolute',
          background: 'url("your-background-image-url.jpg") no-repeat center center',
          filter: 'blur(8px)',
        }}
      />
      {services.map((service, index) => (
        <Box
          className="hover:border-2 hover:border-[white] cursor-pointer"
          key={index}
          sx={{
            width: '180px',
            height: '180px',
            margin: '10px',
            backgroundColor: '#8fbfda7a',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            padding: 2,
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
              animation: 'waveBg 1.5s linear infinite',
              background: 'linear-gradient(135deg, #8fbfda, #4c56767a, #4c56767a)',
              backgroundSize: '400% 400%',
            },
            '@keyframes waveBg': {
              '0%': { backgroundPosition: '0% 50%' },
              '40%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          <Box sx={{ color: 'white' }}>
            {service.icon}
          </Box>
          <Typography variant="h5" sx={{ color: 'white', textAlign: 'center', fontSize: "20px" }}>
            {service.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default BlurMenu;
