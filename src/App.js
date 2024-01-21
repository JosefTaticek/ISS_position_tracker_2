import React from 'react'
import { useEffect, useState } from 'react'

const url = http://api.open-notify.org/iss-now.json

const App = () => {

  const [loading, setLoading] = useState(false) 

  useEffect( ()=>{

  }, [])


  if (loading === true) {
    return <h2>Načítání stránky</h2>
  } else {
    return <h2>Obsah stránky</h2>
  }
}


export default App




/*
import {useState, useEffect} from "react"

const App = () => {

  const random = 3
  ě
  //1) Nejprve se nastaví longitude a latitude na prázdné stringy
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [urlMap, setUrlMap] = useState("")


  //4) Z API se získají data a přidají se do h a p
  const getCoordinates = async () =>{
    const response = await fetch("http://api.open-notify.org/iss-now.json")
    const data = await response.json()

    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
 
  //5) Aktivně se měnící odkaz na mapy s pozicí ISS -> useState, render <a>, natažení dat z API a pomocí useState jejich update
    const iss_long = data["iss_position"]["longitude"]
    const iss_lat = data["iss_position"]["latitude"]

    setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=5`)
  }

  //3) Spustí se funkce (ale jen jednou a na konci)
  useEffect( ()=>{
    getCoordinates()
  },[])




  //2) Vyrenderuje se nadpis a text
  return <div>
    <h1>API</h1>
    <h2>Zeměpisná šířka</h2>
    <p>{latitude}</p>
    <h2>Zeměpisná délka</h2>
    <p>{longitude}</p>
    <a href={urlMap} target="_blank">Pozice ISS v mapách</a>
  </div>
}


export default App*/