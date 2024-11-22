

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Landing from "./Pages/Landing";
import { useState } from "react";

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "Mathan",
        password: "123"
      },

      {
        username: "abc",
        password: "123"
      }
    ]
  )



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>)
}


export default App;
