import React from 'react'
import {useState, useEffect} from "react"


const url = "http://api.open-notify.org/iss-now.json"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  
  useEffect(()=>{

    fetch(url)
      .then((response) => response.json())
      .then((data)=>data["iss_position"])
      .then((position)=>{
        console.log(position["latitude"])
        console.log(position["longitude"])
        setLatitude(position["latitude"])
        setLongitude(position["longitude"])
      })
    //Fetch data (wait till completed), then save to data, than log
      setLoading(false)
  }, [])


  if (loading){
  return <h2>Načítání stránky...</h2>
  } 

  return <>
    <h2>Zeměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zeměpisná délka</h2>
    <p>{longitude}</p>
  </>



  }
export default App