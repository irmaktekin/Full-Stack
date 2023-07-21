import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './TodoApp.css';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';

function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if (authContext.isAuthenticated){
        return children


    }
    else{
        return <Navigate to="/" />
    }

}

export default function ToDoApp(){
    return (
        <div className='TodoApp'>
            <AuthProvider>
        <BrowserRouter>
        <HeaderComponent/>
            <Routes>
                <Route path='/' element={<LoginComponent/>}/>
                <Route path='/login' element={<LoginComponent/>}/>
                <Route path='*' element={<ErrorComponent/>}/>
                <Route path='/todos' element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>}/>
                    <Route path='/logout' element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>

                    <Route path='/welcome/:username' element={<AuthenticatedRoute><WelcomeComponent/></AuthenticatedRoute>}/>
                   


            </Routes>

        </BrowserRouter>
        </AuthProvider>


        
        </div>

    )
}

