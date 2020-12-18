import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/Logo.jpg'

const Header = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar expand="lg" className='navbar'>
          <Nav.Link as={NavLink} to='/' className='navbar_link'>
            <Navbar.Brand className='navbar_title'>
              <img src={logo} alt='logo' className='navbar_logo' />
            </Navbar.Brand>
          </Nav.Link>
        </Navbar>
      </Grid>
      {/* 
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Tabs value={tabValue} indicatorColor="white" onChange={(e, newValue) => setTabValue(newValue)} className='tabs'>
            <Tab label='Home' value='Home' className={tabValue == 'Home' ? 'tabs_title_active' : 'tabs_title'} />
            <Tab label='Databank' value='Databank' className={tabValue == 'Databank' ? 'tabs_title_active' : 'tabs_title'} />
          </Tabs>
        </Paper>
      </Grid> */}

    </Grid> // End of Grid container
  )
}

export default Header