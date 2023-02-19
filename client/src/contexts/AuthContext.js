import { createContext,useContext,useState,useEffect, } from "react";
import { fetchLogout, fetchMe } from "../Api";
import { Flex,Spinner } from '@chakra-ui/react'


 const AuthContext=createContext();


  const AuthProvider=({children})=>{

    const[user,setUser]=useState(null);

    const[loggedIn,setLoggedIn]=useState(false);

    const[loading,setLoading]=useState(true);



    //kullanıcıardaki mail localstoragedaki maile eşitse giriş yapmış oluyor
   useEffect(()=>{


     (async()=>{


     try {

        const loginData = JSON.parse(localStorage.getItem("loginData"));
        const me = await fetchMe();


        if (loginData !== null) {
            const newMe = me.find((item) => item.email === loginData.email);
            setLoggedIn(true);
            setUser(newMe);
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
     localStorage.setItem("loginData", JSON.stringify(data));
    }


    const logout=async(callback)=>{
   
    setLoggedIn(false)
    setUser(null)
    localStorage.removeItem("loginData")
    await fetchLogout();
    callback();



    }

    const values={

        loggedIn,
        user,
        login,
        logout,
      

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