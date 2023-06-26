import { useContext } from 'react';
import './ProductList.css'
import CartContext from '../../store/cart-context';

const ProductList = (props) =>{
   const cartCtx = useContext(CartContext)
   const addToCart = (e)=>{
    e.preventDefault();
   let obj={
    id:`I${cartCtx.items.length+1}`,
    title: `${props.title}`,
    price: props.price,
    imageUrl: `${props.url}`,
    }
   console.log(obj)
   cartCtx.addItem(obj);
   cartCtx.cart(obj);
   }
    return <div className="card-item">
        <h2>Album{props.id}</h2>
    <div >
        <div className="body">
        <h5 className="title">Album:-{props.title}</h5>
        <div className='price-btn'>
        <img className="img" src={`${props.url}`} alt=""  ></img>
        <p className="text">${props.price}</p>
        </div>
        <button  className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>    
    </div>
    </div>
}
export default ProductList

