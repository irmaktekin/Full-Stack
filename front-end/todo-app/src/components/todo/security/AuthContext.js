import { createContext,useContext,useState} from "react";
//create a context
export const AuthContext = createContext()
export const useAuth = ()=>useContext(AuthContext)

//put some state in the context


//share the context with other components

export default function AuthProvider({children}){
    const [number, setNumber]=useState(10)
     
    const [isAuthenticated, setAuthenticated]=useState(false)

    //setInterval(()=>setNumber(number+1), 10000)
    //const valueToBeShared = {number, isAuthenticated, setAuthenticated}
    return(
        <AuthContext.Provider value={{number, isAuthenticated, setAuthenticated}} >
            {children}
        </AuthContext.Provider>

    )
}


