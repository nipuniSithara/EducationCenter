import { useEffect, useRef, useState, useContext } from 'react';
import AuthContext from '../context/authProvider';
import axios from '../api/axios';

const LOGIN_URL = '/auth';

export const Login = () =>{
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(()=>{ //to load in the first time
    //     userRef.current.focus();
    // },[]);

    useEffect(()=>{
        setErrMsg(''); //if user change username or pw, the error msg will disapear
    },[user,pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        try{
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({username:user,password:pwd}),
                {
                    headers:{ 'Content-Type':'application/json'},
                    withCredentials:true
                }
            );
           // console.log(JSON.stringify(response?.data));
           const accessToken = response?.data.token;
           const roles = response?.data.roles;
           setAuth({user, accessToken, roles});
            setUser('');
            setPwd('');
            setSuccess(true);
        }
        catch(error){
            if(!error.response){
                setErrMsg('No server response!')
            }else if(error.response?.status === 400){
                setErrMsg('Missing username or password');
            }else if(error.response?.status === 401){
                setErrMsg('Unauthorized');
            }else{
                setErrMsg('Login failed!');
            }
            errRef.current.focus();
        }
       
    };

    return(
        <>
        {success ?  (
            <section>
                <h3>You have loged in</h3> <br/>
                <p>
                    <a href="#">Home</a>
                </p>
            </section>) : (
         <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscren"} aria-live="assertive">{errMsg}</p>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                    type="text" name="username" id="username" 
                    ref={userRef} autoComplete="off" 
                    onChange={(e)=>setUser(e.target.value)}
                    value={user}
                    required
                    />
                <label htmlFor='password'>Password</label>
                <input 
                    type="password" name="password" id="password" 
                    onChange={(e)=>setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
                <button>Sign In</button>

            </form>
            <p>
                Need an Account ? <br/>
                <span className='line'>
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
        )}
        </>
    
    )
}