import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
        <Link to={"/"} className="logo">
            <img src="/logo.jpg" alt="" style={{width:"100px",height:"auto"}}/>
        </Link>
        <h1 className="title">HiWM Shopping</h1>
        <Link to={'cart'} className="cart-logo">
            <img src="/cart.jpg" alt=""  style={{width:"50px", height:"auto"}}/>
        </Link>
    </div>
  )
}
