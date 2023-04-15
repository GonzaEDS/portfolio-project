import { Box, Grid, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <Box
      sx={{ pt: 6, minHeight: '100vh' }}
      id="projects-section"
      data-aos="fade-right"
    >
      <Typography variant="h4" align="center" sx={{ mb: 6 }}>
        Featured Projects
      </Typography>
      <Grid
        container
        spacing={4}
        columnSpacing={{ xs: 0, sm: 5 }}
        rowSpacing={3}
        justifyContent="center"
        sx={{
          mx: 'auto',
          padding: '0 calc(10vw)'
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <ProjectCard
            title="Snappier"
            tech={['Javascript', 'Sass']}
            description="A cryptocurrency trading simulator that allows you to build a portfolio and track its performance over time. An SPA built in pure JavaScript. Styled with Sass."
            link="https://gonzaeds.github.io/Snappier-v9/#/about"
            image={'/snappier-web-ui.png'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ProjectCard
            title="Amaze Anywhere"
            tech={['HTML', 'CSS', 'Sass', 'Bootstrap']}
            description="A sells page for a course on card magic."
            link="https://gonzaeds.github.io/Amaze-Anywhere__Dos-Santos/"
            image={'/amaze-anywhere.png'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ProjectCard
            title="LaissezFaire"
            tech={['React', 'JavaScript', 'Firebase']}
            description="An E-commerce built primary with React. Using Firestore as database."
            link="https://gonzaeds.github.io/"
            image={'/laissezfaire.png'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ProjectCard
            title="Traden"
            tech={['Python', 'Flask', 'CSS', 'Bootstrap']}
            description="A crypto exchange simulator built in Flask as a capstone project for CS50"
            link="https://gonzaeds.github.io/"
            image={'/traden3.png'}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects
