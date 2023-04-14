import { AppBar, Toolbar, Button } from '@mui/material'

function Navbar() {
  return (
    <AppBar
      position="absolute"
      sx={{
        background: 'linear-gradient(180deg, #000000, transparent)',
        boxShadow: 'none',
        '& .MuiToolbar-root': {
          paddingRight: '3rem',
          minHeight: '3rem',
          '@media (max-width: 500px)': {
            minHeight: '4rem',
            paddingX: '0'
          },
          '& .custom-button': {
            textTransform: 'none',
            backgroundColor: 'transparent',
            fontSize: '15px',
            fontFamily: '"Nunito", sans-serif',
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1
            }
          }
        }
      }}
    >
      <Toolbar
        className="custom-toolbar"
        sx={{
          justifyContent: 'flex-end',
          gap: '2rem',
          paddingRight: '3rem',
          '@media (max-width: 500px)': {
            paddingX: '0',
            justifyContent: 'center'
          }
        }}
      >
        <Button
          color="inherit"
          className="custom-button"
          onClick={() => {
            document
              .getElementById('projects-section')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          className="custom-button"
          onClick={() => {
            document
              .getElementById('about-section')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          className="custom-button"
          onClick={() => {
            document
              .getElementById('contact-section')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
