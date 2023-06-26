import { useContext, useRef,useState } from "react";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";

const User = () =>{
    const authCtx = useContext(CartContext)
    const [isLogin, setIsLogin] = useState(true);
    const email=useRef();
    const password=useRef();
    const nev=useNavigate();
    

    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (e) =>{
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6X9nslzTIQhV8ssN_BIW1ESJp3a2IeGg',
        {
            method:'POST',
            body:JSON.stringify({
                email:email.current.value,
                password:password.current.value,
                returnSecureToken:true
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>{
            if(res.ok){
                res.json().then((data)=>{
                    console.log(data)
                    authCtx.logIn(data.idToken,data.email)
                    nev('/store');
                })
            }else{
              alert('Sorry!!! You have entered wrong credientials')
            }
        })       
    }

    return <section>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' ref={email}  required />
      </div>
      <div >
        <label htmlFor='password'>Your Password</label>
        <input ref={password} type='password' id='password' required />
      </div>
      <div >
      <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
        <button type='button' onClick={switchAuthModeHandler}>
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
    
}

export default User;