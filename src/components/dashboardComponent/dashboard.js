import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  Switch,
  Route
} from "react-router-dom";

import HeaderContainer from '../../containers/dashboardContainer/header';
import MyDashboardContainer from '../../containers/dashboardContainer/myDashboard'

const sections = [
  { title: 'Overview', url: '/dashboard/overview' },
  { title: 'My Dashboard', url: '/dashboard/mydashboard' },
  { title: 'Personal Data', url: '/dashboard/personaldata' },
  { title: 'Official Information', url: '/dashboard/officialinfo' },
  { title: 'E Docket', url: '/dashboard/edocket' },
  { title: 'My Nominations', url: '/dashboard/mynominations' },
  { title: 'My Ecological Footprint', url: '/dashboard/myecologicalfootprint' }
];

const DashboardComponent = (props) => {
    return (
      <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderContainer title="Harmony +" sections={sections} />
        <main>
          <Switch>
            <Route path='/dashboard/overview'>
            <h3>Overview</h3>
            </Route>
            <Route path='/dashboard/mydashboard'>
            <MyDashboardContainer />
            </Route>
            <Route path='/dashboard/personaldata'>
            <h3>Personal Data</h3>
            </Route>
            <Route path='/dashboard/officialinfo'>
              <h3>Official Info</h3>
            </Route>
            <Route path='/dashboard/edocket'>
              <h3>E Docket</h3>
            </Route>
            <Route path='/dashboard/mynominations'>
            <h3>My Nominations</h3>
            </Route>
            <Route path='/dashboard/myecologicalfootprint'>
              <h3>My Ecological Footprint</h3>
            </Route>
        </Switch>
         
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </Fragment>
  
    )
  }

export default DashboardComponent