import './App.css'
import { useJsApiLoader } from '@react-google-maps/api'


function App() {

  const{isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCydetTll1rSE1EDqRq-mM0ubw48gu1NgU", //this should be got by process.env
    libraries:["places"]
  })

  if(isLoaded) {
    return console.log("blabla")
  }

  return (
    console.log("Maps app")
    
  )
}
export default App
