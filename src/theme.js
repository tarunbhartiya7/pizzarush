import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
    },
    secondary: {
      main: '#FF5722',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
