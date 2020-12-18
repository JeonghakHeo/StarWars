import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
import Home from './components/Home'
import Databank from './components/Databank'
import Details from './components/Details'
import { Grid, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

const App = () => {

  const [learnMore, setLearnMore] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setLearnMore(false)
  }

  return (

    <Grid container>

      {/* Header */}
      <Grid item xs={12}>
        <Router>
          <Header />
        </Router>
      </Grid>

      {/* Content */}
      <Grid item xs={12}>
        <Router>
          <Content />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/databank' component={Databank} />
            {/* <Modal
              open={!!learnMore}
              onClose={() => handleCloseModal()}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}> */}
            <Route path='/details' component={Details} />
            {/* </Modal> */}
          </Switch>
        </Router>
      </Grid>

    </Grid> // End of Grid container

  )
}

export default App
