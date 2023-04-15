import { Box, Typography } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import {
  SiTwitter,
  SiLinkedin,
  SiAngellist,
  SiStackoverflow,
  SiGithub
} from 'react-icons/si'

function SocialIcon({ link, ...restProps }) {
  return (
    <Box
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'inline-block',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)'
        },
        '& svg': {
          cursor: 'pointer',
          color: 'inherit'
        }
      }}
      {...restProps}
    />
  )
}

function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: 'ease-out'
    })
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const bg = document.querySelector('#bg')
      const nm = document.querySelector('#nm')
      if (bg) {
        bg.style.backgroundPositionY = `${scrollTop * 0.6}px`
      }
      if (nm) {
        nm.style.transform = `translatey(${scrollTop * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        backgroundImage: 'url(/photo8.png)',
        backgroundSize: 'cover',
        backgroundColor: 'rgb(18 60 48 / 79%)',
        backgroundBlendMode: 'lighten',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '7rem',
        alignItems: 'center',
        color: 'hsl(165 3% 78% / 1);',
        textAlign: 'center',
        textShadow: '0 2px 5px rgba(0,0,0,0.5)',
        '@media (max-width: 500px)': {
          paddingLeft: '0'
        },
        '@media (min-width: 1300px)': {
          paddingLeft: 'calc(-5rem + 16.5vw)'
        },

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background:
            'linear-gradient(to right, rgb(0 0 0 / 74%), transparent)',
          zIndex: 888
        }
      }}
      id="bg"
    >
      <Box sx={{ zIndex: 999, mb: 15 }}>
        <Box id="nm">
          <Typography
            data-aos="fade-up"
            data-aos-duration="600"
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              '@media (min-width: 1300px)': {
                fontSize: 'calc(1rem + 2.5vw)'
              }
            }}
          >
            Gonzalo Dos Santos
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h5"
            component="h2"
            sx={{
              fontSize: 'calc(0.8rem + 1.4vw)',
              mb: 2,
              '@media (max-width: 500px)': {
                fontSize: '2rem'
              }
            }}
          >
            Full-Stack Developer
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '9vh',
            gap: 'calc(1.4rem + 2vw)',
            fontSize: 'calc(0.6rem + 0.5vw)',
            '@media (max-width: 500px)': {
              gap: '2rem',
              fontSize: '1rem',
              width: '100%'
            }
          }}
        >
          <SocialIcon link={'https://twitter.com/Herr_Gegenstand'}>
            <SiTwitter
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              size="2em"
              style={{
                marginRight: '0.5rem',
                color: '#2782ab'
              }}
            />
          </SocialIcon>
          <SocialIcon link="https://www.linkedin.com/in/gonzalo-dos-santos/">
            <SiLinkedin
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="750"
              size="2em"
              style={{
                marginRight: '0.5rem',
                boxShador: '0px 0px 1px 1px #ffffff4a',
                color: '#164d91',
                background: '#ffffff91',
                borderRadius: '6px'
              }}
            />
          </SocialIcon>

          <SocialIcon link={'https://wellfound.com/u/gonzalo-dos-santos'}>
            <SiAngellist
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="600"
              size="2em"
              style={{ marginRight: '0.5rem', color: '#c5c9c8' }}
            />
          </SocialIcon>
          <SocialIcon link={'https://stackoverflow.com/users/19169205/gonzalo'}>
            <SiStackoverflow
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="550"
              size="2em"
              style={{ marginRight: '0.5rem', color: 'orange' }}
            />
          </SocialIcon>
          <SocialIcon link={'https://github.com/GonzaEDS'}>
            <SiGithub
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="600"
              size="2em"
              style={{ color: '#c5c9c8' }}
            />
          </SocialIcon>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
