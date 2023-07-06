import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
export default function Logout(){
    const navigate = useNavigate();
    useEffect(() => {
    
    const handleLogout=async()=>{
        try{
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/logout",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`
              }
        });
        if(response.ok){
            localStorage.removeItem('token');
            console.log("You have successfully signed out");
            navigate("/")
        }
        else{
            console.log("Please try again, logout failed")
        }

    }
    catch(error){
        console.log(error);
    }
};
handleLogout();
    },[]);
    return(
        <div>Logging Out
        </div>
    )
}