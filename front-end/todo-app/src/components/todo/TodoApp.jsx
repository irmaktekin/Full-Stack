import { useState } from 'react';
import { BrowserRouter,Routes,Route,useNavigate,useParams } from 'react-router-dom';
import './TodoApp.css';

export default function ToDoApp(){
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>
                <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                <Route path='/todos' element={<ListTodosComponent/>}/>
                <Route path='*' element={<ErrorComponent/>}/>



            </Routes>
        </BrowserRouter>

        
        </div>

    )
}


function LoginComponent(){
    const [username, setUsername]= useState("irmaktekin")
    const [password, setPassword]= useState('')
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)
    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
        
    }
    function handleSubmit(){
        if(username==='irmaktekin'&& password==='dummy'){
            navigate(`/welcome/${username}`);
        
            setShowSuccessMessage(true);
            setShowErrorMessage(false);

        }
        else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
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



function WelcomeComponent(){
    const {username} = useParams()

    console.log(username);
    return (
        <div className="Welcome">
        <h1>Welcome</h1>

        </div>

    )
}

function ErrorComponent(){
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC.
            </div>
        </div>

    )
}


function ListTodosComponent(){
    const todos = [{id:1,description: 'Learn AWS'},
    {id:2,description: 'Learn Full Stack'}]
    return (
        <div className="ListToDosComponent">
            <h1>Things You Want To Do !</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>

                        <tbody>
                            {
                                todos.map(
                                    todo=>(<tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
        
                                    </tr>)
                                )

                            }
                            
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>

    )
}