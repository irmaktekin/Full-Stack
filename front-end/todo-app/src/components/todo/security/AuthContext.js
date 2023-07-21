import { createContext,useState} from "react";
//create a context
export const AuthContext = createContext()
//put some state in the context


//share the context with other components

export default function AuthProvider({children}){
    const [number, setNumber]=useState(10)


    return(
        <AuthContext.Provider value={{number}} >
            {children}
        </AuthContext.Provider>

    )
}


