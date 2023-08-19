import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./styles.css"; 
import { Cart } from '../Context';

const Header = () => {

  const {cart} = useContext(Cart);

  return (
    <div style={{ background: 'cadetblue', textAlign:'center', padding:'30px 0 0' }}>
        <span className='titleName'>Mini Store</span>
        <ul className='nav'>
            <li>
                <Link to='/'>Home Page</Link>
            </li>
            <li>
                <Link to='/cart'>Cart ({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header