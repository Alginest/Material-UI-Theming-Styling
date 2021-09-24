import { createTheme } from '@mui/material/styles'
import { red, green } from '@mui/material/colors'
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    fontSize: 16,
  },
})

export default theme
