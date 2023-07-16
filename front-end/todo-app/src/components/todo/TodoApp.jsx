import { useState } from 'react';
import './TodoApp.css';

export default function ToDoApp(){
    return (
        <div className="TodoApp">ToDo Management Application
        <LoginComponent/>
        
        </div>

    )
}


function LoginComponent(){
    const [username, setUsername]= useState("irmaktekin")
    const [password, setPassword]= useState('')
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
        
    }
    function handleSubmit(){
        if(username==='irmaktekin'&& password==='dummy'){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);

        }
        else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }
    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return (
                <div className='successMessage'>Authenticated succesfully</div>
            )
        }
        else{
            return null;
        }
    }
    function ErrorMessageComponent(){
        if(showErrorMessage){
            return (
                <div className='errorMessage'>Authentication failed</div>
            )
        }
        else{
            return null;
        }
    }
    return(
        <div className="Login">
            <SuccessMessageComponent/>
            <ErrorMessageComponent/>
           

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



function WelcomeComponent(){
    return (
        <div className="Welcome">
            Welcome Component
        </div>

    )
}