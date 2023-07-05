import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import styles from "app/styles/signin.css"
import {FaUser, FaLock} from "react-icons/fa";
export const links = () => [
    { rel: "stylesheet", href: styles },
  ];
  

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("You have successfully signed in");
        const token = data.token;
        localStorage.setItem("token", token);
        console.log(token);
        navigate("/donation");
      } else {
        alert("Please try again");
      }
    } catch (error) {
      console.log(error);
      alert("This is an error: " + error.message);
    }
  };

      const handleNewUser=()=>{
        navigate('/singup');
    };

  return (
    <div className="background">
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username"><FaUser/>&nbsp;&nbsp;Enter your username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <label htmlFor="password"><FaLock/>&nbsp;&nbsp;Enter your password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
        <button style={{marginTop:20}} type= "button" onClick={handleNewUser}>New User?</button>
      </form>
    </div>
  );
}


// import { useContext, useState } from "react";
// import { useNavigate } from "@remix-run/react";

// export default function Login(){
//     const [userName, setUserName] = useState('');
//     const [password,setPassword] = useState('');
//     const navigate = useNavigate();
//     // const [token, setToken] = useState('');

//     const handleLogin=async(submitEvent)=>{
//         submitEvent.preventDefault();
//         try{
//             const response = await fetch('http://localhost:5000/api/login',{
//                 method: "POST",
//                 headers:{
//                     "Content-Type":"application/json",
//                 },
//                 body:JSON.stringify({
//                     "username":userName,
//                     "password":password
//                 }),
//             });
//             const data = await response.json();
//             if(response.ok){
//                 alert("You have successfully signed in");
//                 const token = data.token;
//                 localStorage.setItem("token", token);
//                 console.log(token);
//                 navigate('/');
//             }
//             else{
//                 alert("Please try again");
//             }
//         }
//         catch(error){
//             console.log(error);
//             alert("this is an error "+error.message);
//         }
//     };

//     const handleNewUser=()=>{
//         navigate('/singup');
//     }

//     return(
//         <div>
//             <h1>Sign In</h1>
//             <form onSubmit={handleLogin}>
//                 <input type="username" 
//                 placeholder="username" 
//                 value={userName} onChange={(Event)=>setUserName(Event.target.value)}
//                 />
//                 <input type="password" 
//                 placeholder="password" 
//                 value={password} onChange={(Event)=>setPassword(Event.target.value)}
//                 />
//                 <button type="submit">Sign In</button>
//                 <button onClick={handleNewUser}>New User?</button>
//             </form>
//         </div>
//     );
// }