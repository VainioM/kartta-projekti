import './styles/App.css'
import { useJsApiLoader } from '@react-google-maps/api'
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header.jsx';
//import List from './components/List.jsx';
import Map from './components/Map.jsx';


function App() {

  const{isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCydetTll1rSE1EDqRq-mM0ubw48gu1NgU", //this should be got by env.local, this is now public
    libraries:["places"]
  })

  if(isLoaded) {
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
                
            </Grid>
            <Grid item cs={12} md={8}>
                <Map />
            </Grid>
        </Grid>
        </>
    )
  }

  return (
    console.log("Loading...")
    
  )
}
export default App
