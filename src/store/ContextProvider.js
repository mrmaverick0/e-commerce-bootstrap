import CartContext from "./cart-context";
import { useState } from "react";

const productsArr = [
    ]

const CartProvider = (props) =>{
    const preToken = localStorage.getItem('token')
    const [arr,setArr] = useState(productsArr)
    const [token,setToken] = useState(preToken)
    const islogged = !!token
    
    const logOutHandler = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('email')
        setToken(null)
    }
    const loginHandler = (token,email) =>{
        setToken(token);
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        let emailid=localStorage.getItem('email')
        emailid=emailid.replace('.','');
        emailid=emailid.replace('@','');
        fetch(`https://crudcrud.com/api/271a1bf0bd6844fe94aac40cf74281fa/${emailid}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            data.map((item)=>{
                return setArr((pre)=>[item,...pre])
            })
        })
        .catch((err)=>{console.log(err)})

    }
    const addHandler = (item) =>{
        setArr((pre)=>[item,...pre])
    }
    const removeHandler = (id) =>{
        setArr((pre)=>pre.filter((itm)=>itm.id!==id))
    }
    
    const cartHandler = (obj) =>{
        // let email=localStorage.getItem('email');
        // email=email.replace('.','')
        // email=email.replace('@','')
        // fetch(`https://crudcrud.com/api/271a1bf0bd6844fe94aac40cf74281fa/${email}`,
        // {
        //     method:'POST',
        //     body:JSON.stringify(obj),
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     }
        // })
        // .then((res)=>{console.log(res)})
        // .catch((err)=>{console.log(err)})
    }

    const cartContext = {
        items:arr,
        totalAmount:0,
        addItem:addHandler,
        removeItem:removeHandler,
        token:token,
        islogged:islogged,
        logIn:loginHandler,
        logOut:logOutHandler,
        cart:cartHandler,
        
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;