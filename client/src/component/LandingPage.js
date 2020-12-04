import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../src/theme'
import Item from '../components/item'

const LandingPage = () => (
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <Item />
    <Grid>
    </Grid>
    </ThemeProvider>
  )

  export default LandingPage
