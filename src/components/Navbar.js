import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(Window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                TREE <i class='fa-solid fa-tree'></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        主頁 Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        登入 Sign-in
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='Tree Dictionary' className='nav-links' onClick={closeMobileMenu}>
                        樹木字典 Tree Dictionary
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>註冊 SIGN UP</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar
