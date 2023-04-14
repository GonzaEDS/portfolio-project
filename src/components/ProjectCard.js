import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'

function ProjectCard({ title, description, tech, link, image }) {
  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardActionArea
        sx={{ height: '100%' }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <img src={image} alt={title} style={{ width: '100%' }} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontSize: '1.6rem', color: '#000000ed' }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {tech.join(' ')}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.95rem' }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProjectCard
