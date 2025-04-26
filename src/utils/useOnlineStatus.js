import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{

        if(window.navigator.onLine){
            console.log("online 0 0 0 ");
            setOnlineStatus(true);
        }else{
            console.log("offline 0 0 0 ");
            setOnlineStatus(false);
        }
        
        
    },[]);


    return onlineStatus;
    
}

export default useOnlineStatus;