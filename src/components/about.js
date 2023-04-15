import { Box, Button, Grid, Typography } from '@mui/material'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiCss3,
  SiSass,
  SiBootstrap
} from 'react-icons/si'

function About() {
  return (
    <Box
      sx={{
        pt: 6,
        pb: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
      }}
      style={{ overflowX: 'hidden' }}
      data-aos="fade-left"
      id="about-section"
    >
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 5,
          maxWidth: '75%',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}
      >
        I&apos;m an experienced JavaScript Developer with skills in web
        development and application design. Proficient in React, Node.js,
        Express, and MongoDB, as well as CSS3, Sass, and multiple style
        libraries. I&apos;m dedicated to writing efficient, clean code and
        crafting user-friendly interfaces. Quick learner when it comes to new
        tech and concepts. Good communication, hard-working attitude, and B2
        level of English proficiency.
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" align="center" sx={{ mb: 4 }}>
          Technologies
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <SiJavascript size={48} />
          </Grid>
          <Grid item>
            <SiReact size={48} />
          </Grid>
          <Grid item>
            <SiNodedotjs size={48} />
          </Grid>
          <Grid item>
            <SiExpress size={48} />
          </Grid>
          <Grid item>
            <SiMongodb size={48} />
          </Grid>
          <Grid item>
            <SiPython size={48} />
          </Grid>
          <Grid item>
            <SiCss3 size={48} />
          </Grid>
          <Grid item>
            <SiSass size={48} />
          </Grid>
          <Grid item>
            <SiBootstrap size={48} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          href="https://docs.google.com/document/d/108Kgpd4UxHDnkoBx2y3qqLOUS2RU_eaaNRcScHx4DxE/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Resume
        </Button>
      </Box>
    </Box>
  )
}

export default About
