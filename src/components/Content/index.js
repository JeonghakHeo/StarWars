import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Paper, Grid } from '@material-ui/core'



const Content = () => {

  const [tabValue, setTabValue] = useState('');

  return (
    <Grid container className='content_container'>

      <Grid item xs={12}>
        <Paper elevation={3}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} className='tabs'>
            <Link to='/'><Tab label='HOME' value='Home' className={tabValue === 'Home' ? 'tabs_title active' : 'tabs_title'} /></Link>
            <Link to='/databank'><Tab label='DATABANK' value='Databank' className={tabValue === 'Databank' ? 'tabs_title active' : 'tabs_title'} /></Link>
          </Tabs>
        </Paper>
      </Grid>
      {/* End of Tabs */}

      <Grid item xs={12}>
        <Grid container>
          {/* <Home /> || <Databank /> */}
        </Grid>
      </Grid>
    </Grid>



  )
}

export default Content
