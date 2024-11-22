import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {

    const navigate = useNavigate()
    const [eusername,setEusername]=useState("")
    const [epassword,setEpassword] = useState("")
    const [ruser,setRuser] = useState(true)

   const users = props.users
   

    function handleUinput(event)
    {
        setEusername(event.target.value)
    }

    function handlePinput(event)
    {
        setEpassword(event.target.value)
    }

    function checkUser()
    {
       var userfound = false
        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword){
                console.log("success")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
            if(userfound === false){
                console.log("login failled")
                setRuser(false)
            }
            
        })
    }
    return (
        <div className="bg-gray-950 p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium ">Hey! Hi👋</h1>
            {ruser? <p>I Help You Manage Your Activities After You Login :)</p>:
            <p className="text-red-600">Please Sign Up Before You Login</p>}
           

            <div className="flex flex-col gap-2 my-2">
                <input 
                type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="UserName"
                onChange={handleUinput}/>

<input 
                type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Password"
                onChange={handlePinput}/>

                <button onClick={checkUser} className="bg-[#00385d] w-24 p-2 rounded-md text-white font-medium">Login</button>

                <p>Don't Have an Account ? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
        </div>
    </div>
    )
}
export default Login