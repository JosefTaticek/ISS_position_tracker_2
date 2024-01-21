

//Destructuring
const vychoziPole = ["David", "Hermiona", "Harry"]
const [student1, student2, student3] = vychoziPole


//UseState
import {useState} from "react"

const Kata = () => {

    const [title, setTitle] = useState("Výchozí text")
    const buttonHandler = ()=>{
        setTitle("Nový title")
    }

    return <div>
        <button onClick={buttonHandler}>Změnit title</button>
    </div>
}

export default Kata


//Stylování - základy
body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}


//.map a filter
const vychoziPole = [5, 6, 7, 8]
const vyslednePole = vychoziPole.map((jednoCislo)=>{
    return jednoCislo + 10
})

console.log(vyslednePole);

//b).filter()
const puvodniPole = [1, 2, 3]
const novePole = puvodniPole.filter((cislo)=>{
    return cislo ==! 3
})


//Props
-


//useEffect
import {useEffect} from "react"

useEffect(()=>{

},[])


//Cleanup function
-


//Práce s API
import React from 'react'

const Kata = () => {
    const getDataFromApi = async ()=>{
        const response = await fetch("google.com")
        const data = await response.json()
        console.log(data["quote"]);
    }

    getQuote()
     
  return (
    <div>Kata</div>
  )
}

export default Kata


//Multiple returns


//.then 
