import { createContext,useContext,useState,useEffect, } from "react";
import { fetchMe } from "../Api";



 const AuthContext=createContext();


export  const AuthProvider=({children})=>{

    const[user,setUser]=useState(null);

    const[loggedIn,setLoggedIn]=useState(false);


   useEffect(()=>{


     (async()=>{


       const me=fetchMe();

       setLoggedIn(true);
       setUser(me);
      



     })()



   })



    const login=(data)=>{

     setLoggedIn(true)
     setUser(data);
    }

    const values={

        loggedIn,
        user,
        login,
      

    }


return <AuthContext.Provider value={values} >{children}</AuthContext.Provider>

}


export const useAuth=()=>{


const context=useContext(AuthContext);

if (context===undefined) {
    
   


}
return context;


}