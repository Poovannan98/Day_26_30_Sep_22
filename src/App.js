import './App.css';
import AddUser from './Components/AddUser';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState } from 'react';


function App() {

  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"215,000",
    Task:"80",
    pendingRequest:18
  }

  let [users,setUsers] = useState([
    {
      name:"Poovannan",
      email:"poovannan@gmail.com",
      batch:"B39WDT",
      mobile:"9856147232"
    },
    {
      name:"Loganathan",
      email:"loganathan@gmail.com",
      batch:"B39WDT",
      mobile:"7895116780"
    },
    {
      name:"Jagadeesan",
      email:"jagadeesan@gmail.com",
      batch:"B39WDT",
      mobile:"9874365896"
    },
    {
      name:"Rithik",
      email:"rithik@gmail.com",
      batch:"B39WDT",
      mobile:"8745690214"
    },
    {
      name:"Goshik",
      email:"goshik@gmail.com",
      batch:"B39WDT",
      mobile:"6345690214"
    },
])

  return <>
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>

      <Routes>
        <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
        <Route path='/add-user' element={<AddUser/>}/>

      </Routes>

      </BrowserRouter>     
      
    </div>
    </>   
 }

export default App;
