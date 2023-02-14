import { createContext,useContext,useState,useEffect, } from "react";
import { fetchMe } from "../Api";



 const AuthContext=createContext();


export  const AuthProvider=({children})=>{

    const[user,setUser]=useState(null);

    const[loggedIn,setLoggedIn]=useState(false);

    const[loading,setLoading]=useState(true);


   useEffect(()=>{


     (async()=>{


     try {

        const loginData = JSON.parse(localStorage.getItem("loginData"));
        const me=fetchMe();


        if (loginData !== null) {
            const newMe = me.find((item) => item.email === loginData.email);
            setLoggedIn(true);
            setUser(me);
          }
          // setUser(me);
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
        
     



     })()



   },[])



    const login=(data)=>{

     setLoggedIn(true)
     setUser(data);
    }

    const values={

        loggedIn,
        user,
        login,
      

    }

 

    if (loading) {
        return (
          <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              size="xl"
              color="purple.500"
            />
          </Flex>
        );
      }
      return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
    };
    
    const useAuth = () => useContext(AuthContext);
    
    export { useAuth, AuthProvider };