import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material'
import useStyles from './style'
const Navbar = () => {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' className={classes.buttonExtra}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            @
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Button className={classes.buttonDpi} color='primary'>
        La Vita
      </Button>
    </Box>
  )
}
export default Navbar
