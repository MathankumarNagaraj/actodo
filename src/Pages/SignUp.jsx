

import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
  

    const navigate =useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)


    const users = props.users
  
    

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlepInput(evt)
    {
         setEpassword(evt.target.value)
    }

    function checkUser()
    {     
        var userfound = false

        users.forEach(function(item)
        
        {
           if(item.username === eusername && item.password === epassword)

            {    

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
          
        })

        
    if(userfound===false)
        {
            console.log("Login Failed")
            setRuser(false)
        }


    }

    


    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 border rounded-r-md">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                 
                 
                 {ruser?<p>I help you manage your activities after you login:)</p>:<p className="text-red-500">Please Sign up Before you Login</p>}
               
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="username" 
                        onChange={handleUInput}/>

                    <input
                        type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="password" 
                        onChange={handlepInput}/>


                    <button  onClick={checkUser}  className="bg-[#CE1141] w-24 p-1 rounded-md text-white">
                        Login
                    </button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline" >Sign Up</Link> </p>









                </div>
            </div>
        </div>
    )

}

export default SignUp
