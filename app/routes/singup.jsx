import { useState } from "react";
import styles from "app/styles/signup.css"
import { useNavigate } from "@remix-run/react";

export const links = () => [
    { rel: "stylesheet", href: styles },
  ];
  

export default function Signup(){
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(submitEvent)=>{
        submitEvent.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch('http://localhost:5000/api/register',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    "username":userName,
                    "email":email,
                    "password":password,
                }),
            });
            if (response.ok){
                setIsLoading(false);
                alert("You have successfully signed up");
                navigate('/');
            }else{
                setIsLoading(false);
                // console.log(userName,email,password);
                alert("Please try again");
            }
        }catch(error){
            setIsLoading(false);
            alert(error.message);
        }
    };

    return(
        <div className="background">
            <div className="shape"></div>
            
            <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <input
                type="username"
                placeholder="UserName"
                value={userName}
                onChange={(Event)=>setUserName(Event.target.value)}/>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(Event)=>setEmail(Event.target.value)}/>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(Event)=>setPassword(Event.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
            {isLoading && <div>Loading..</div>}
        </div>
    );
}
