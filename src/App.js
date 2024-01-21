import React from 'react'
import { useEffect, useState } from 'react'

const url = http://api.open-notify.org/iss-now.json

const App = () => {

  const [loading, setLoading] = useState(false) 


  if (loading === true) {
    return <h2>Načítání stránky</h2>
  } else {
    return <h2>Obsah stránky</h2>
  }
}


export default App