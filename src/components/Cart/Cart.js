import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Cart.css'
import CartContext from '../../store/cart-context';



function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext)

  const removeHandler=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    let id=e.target.value;
   cartCtx.removeItem(id);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='cart'>
      <Button variant="primary" onClick={handleShow} className="xl">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='headings'>
            <div>
                Item
            </div>
            <div>
                Price
            </div>
            <div>
              Quantity
            </div>
          </div>
            <br></br>
            {cartCtx.items.map((item,i)=>{ return <div className='cart-items'>
            <div>
              <img src={`${item.imageUrl}`} alt='' width={60}/>
                Album {item.key}
            </div>
            <div>
                {item.price}
            </div>
            <div>
              X{item.quantity}
            </div>
            <div>
              <Button variant='danger' onClick={removeHandler} value={item.id}>Remove</Button>
            </div>
            <br></br>
          </div>
            })}
          <div className='total-price'>
            <span className='total'>Total  </span>
            <div>$220</div>
          </div>
          <br></br>
          <div className='btn'> 
            <Button type='submit' variant='primary' > Purchase</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Cart;