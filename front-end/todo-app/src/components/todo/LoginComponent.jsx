
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
function LoginComponent(){
    const [username, setUsername]= useState("irmaktekin")
    const [password, setPassword]= useState('')
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)
    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
        
    }
    function handleSubmit(){
        if(username==='irmaktekin'&& password==='dummy'){
            authContext.setAuthenticated(true);
        
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);


        }
        else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
            authContext.setAuthenticated(false);

        }
    }
    
   
    return(
        <div className="Login">
            {showSuccessMessage && <div className='successMessage'>Authenticated succesfully</div>
 }
             {showErrorMessage && <div className='errorMessage'>Authenticated failed</div>
}
            
           

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username}
                    onChange={handleUsernameChange}/>

                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password}
                    onChange= {handlePasswordChange}/>

                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}> Login</button>
                </div>
            </div>
        </div>
    )
}




export default LoginComponent