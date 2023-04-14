import { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  TextField,
  TextareaAutosize
} from '@mui/material'
import { toast } from 'react-toastify'

function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const toastStyles = {
    backgroundColor: '#88eace',
    fontSize: '1.15rem',
    borderRadius: '13px',
    color: 'hsl(0 0% 35% / 1)',
    boxShadow:
      '-1px 0px 0px 1px rgb(0 0 0 / 27%), 2px 1px 1px 1px rgb(0 0 0 / 26%)',
    fontFamily: 'nunito sans',
    fontWeight: '600'
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })

    const data = await res.json()

    setIsSubmitting(false)
    if (res.status === 200) {
      toast.success(` ${data.message}`, {
        autoClose: 2000,
        style: toastStyles
      })
    } else if (res.status === 500) {
      toast.error(`${data.message}`, {
        autoClose: 2000,
        style: {
          ...toastStyles,
          backgroundColor: '#ff9696',
          color: 'hsl(0 0% 29% / 1)'
        }
      })
    }
    setName('')
    setSubject('')
    setEmail('')
    setMessage('')
  }

  return (
    <Box
      sx={{
        pt: 6,
        pb: 3,
        mt: 6,
        bgcolor: 'hsl(163deg 46% 41% / 58%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      id="contact-section"
    >
      <Typography
        variant="h4"
        color="rgb(0 0 0 / 67%);"
        sx={{ mb: 4, fontWeight: 600, textAlign: 'center', maxWidth: '90%' }}
      >
        Interested in collaborating?
      </Typography>
      <Typography
        variant="body1"
        color="rgb(0 0 0 / 79%);"
        align="center"
        sx={{ mb: 5, maxWidth: 'calc( 6rem + 45vw + 1vh)', fontSize: '1.2rem' }}
      >
        If you have an application you are interested in developing, a feature
        that you need built, or a project that needs coding, I&apos;d love to
        help you with it.
      </Typography>
      <Box sx={{ width: 'calc(8rem + 39vw)' }}>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={e => setEmail(e.target.value)}
            sx={{ mb: 2, backgroundColor: 'white' }}
            required
            name="email"
          />
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ mb: 2, backgroundColor: 'white' }}
            required
            name="name"
          />
          <TextField
            label="Subject"
            variant="outlined"
            size="small"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            sx={{ mb: 2, backgroundColor: 'white' }}
            required
            name="subject"
          />
          <TextareaAutosize
            variant="outlined"
            maxRows={14}
            placeholder=""
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            style={{
              width: '100%',
              height: '150px',
              resize: 'none',
              padding: '8.5px 14px'
            }}
            name="message"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              my: 2,
              width: '100%',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform ease-in-out 0.3s'
              }
            }}
          >
            Get in touch
          </Button>
          {
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '3rem'
              }}
            >
              {isSubmitting && (
                <CircularProgress
                  size={50}
                  thickness={6}
                  sx={{ color: '#29b68e' }}
                />
              )}
            </Box>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
