import { useEffect, useRef, useState } from 'react';

export const Login = () =>{
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
        setUser('');
        setPwd('');
        setSuccess(true);
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