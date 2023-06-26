import { NavLink,Outlet, useNavigate } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = () =>{
    const nav=useNavigate();
    const authCtx = useContext(CartContext)
    const logoutHandler = () =>{
        authCtx.logOut();
        nav('/')
    }
    return <div>
    <div className="links">
    <NavLink to='/'className={({isActive})=>isActive? 'a' : 'b' } end><h2>Home</h2></NavLink>
    {authCtx.islogged && <NavLink to='/store' className={({isActive})=>isActive? 'a' : 'b' } end><h2>Store</h2></NavLink>}
    {!authCtx.islogged && <NavLink to='/user' className={({isActive})=>isActive? 'a' : 'b' } end><h2>Store</h2></NavLink>}
    <NavLink to='/about' className={({isActive})=>isActive? 'a' : 'b' } end><h2>About</h2></NavLink>
    <NavLink to='/contactus' className={({isActive})=>isActive? 'a' : 'b' } end><h2>Contact</h2></NavLink>
    {!authCtx.islogged &&<NavLink to='/user'className={({isActive})=>isActive? 'a' : 'b' } end><h2>Login</h2></NavLink>}
    
    {authCtx.islogged && <button onClick={logoutHandler}>Logout</button>}
    </div>
        <h1 className="heading">
            The Generics
        </h1>
  
    <Outlet />
    </div>
}


export default Header;