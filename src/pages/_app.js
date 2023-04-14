import '@/styles/globals.css'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito'
import Navbar from '@/components/navbar'
import Home from '@/components/home'
import Projects from '@/components/projects'
import About from '@/components/about'
import Contact from '@/components/contact'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/theme'
import CssBaseline from '@mui/material/CssBaseline'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
        />
      </ThemeProvider>
    </>
  )
}
