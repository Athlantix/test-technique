import {useEffect, useState} from "react"
import './App.css';
import DaysMonth from "./components/DaysMonth";

function App() {
 const [days,setDays]=useState([])

 useEffect(()=>{
  
  let tabDays=[]
  for(let i=1; i<=30 ; i++){
    tabDays.push(i)
  }
  setDays(tabDays)

 },[])







  return (
    <div className="App">
      <h1>Schedule response</h1>

      <p>date <span>20/6/22</span></p>
      <div>
        <p className="month">july 22</p> 
        <div>
          <p> -- </p>
          <p> -- </p>
        </div>
      </div>

      <div className="daysName">
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>T</p>
        <p>F</p>
        <p>S</p>
      </div>

      <div className="days">
      <DaysMonth allDays={days}/>


      </div>



    </div>
  );
}

export default App;
