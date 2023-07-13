import { Link,useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function OrgDonate(){
    const location = useLocation();
    const [orgName,setOrgName] = useState('');
    const [amount,setAmount] = useState(0);
    const orgdata=location.state.data;
    // console.log(orgdata)
    // setOrgName(data.name);
    const payDonation=async(submitEvent,orgName,amount)=>{
        submitEvent.preventDefault();
        try{
            // console.log("Original Body: ",amount,orgName);
            const response=await fetch('http://localhost:5000/api/donate',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    amount:amount,
                    org_name:orgName
                }),
            });
            const data= await response.json() 
            console.log(data);
            if (response.ok){
                alert("u donated "+ data.amount + " to " + data.org_name);
            }
            else{
                alert("error")
            }
        }
        catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        if (location.state) {
            // console.log("going here")
            setOrgName(orgdata.name);
          }
        // setOrgName(data.name);
    
    // The useEffect hook is called every time the component renders. If you don't pass a list of dependencies to the useEffect hook, it will be called every time the component renders, even if the data hasn't changed. This can lead to an infinite chain of updates, which will eventually crash your application.
    // To fix this, you need to pass a list of dependencies to the useEffect hook. The dependencies are the things that the useEffect hook depends on. If any of the dependencies change, the useEffect hook will be called again.
    // In your case, the useEffect hook depends on the location.state.data object. So, you need to pass the location.state.data object as a dependency to the useEffect hook.
    // The useEffect hook will now only be called when the location.state.data object changes. This will prevent an infinite chain of updates, and your application will not crash.

    },[location.state,orgdata.name])

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        // console.log("Setting new amount",amount)
      };


    return(
        <div>
            Hello,You are donating to : {orgName}
            <form>
                <label>Enter amount</label>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button type="submit" onClick={(submitEvent)=>payDonation(submitEvent,orgName,amount)}>
                    Pay Amount
                </button>
            </form>
        </div>
    )
}