import my_hotel from '../assets/my-hotel-text.svg'
import logo from '../assets/logo.png'
import { FaCircleUser } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = ({isActived, className}) => {
    const [showDropdown, setShowDropdown] = useState(true)
    const handleDropdown = () => {
        setShowDropdown((showDropdown) => (showDropdown === true ? false : true));
        console.log(showDropdown)
    }
    return(
        <div className={`container d-flex justify-content-between align-items-center py-1 ${className}`} style={{height:'120px'}}>
            <div className=''>
                <img className='me-3' src={logo} style={{
                    width:'70px',
                    }}
                    width={'auto'}
                    height={'auto'}
                    alt="logo"/>
                <img src={my_hotel} style={{
                    width:'130px',
                    }}
                    width={'auto'}
                    height={'auto'}
                    alt="logo"/>
            </div>
            
            <ul className='list-unstyled d-flex gap-5'>
                <li>
                    <a href="/dashboard" className={`text-decoration-none fs-3 ${isActived == 'dashboard' ? 'text-primary' : 'text-black'}`}>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/rooms" className={`text-decoration-none fs-3 ${isActived == 'rooms' ? 'text-primary' : 'text-black'}`}>
                        Rooms
                    </a>
                </li>
                <li>
                    <a href="/bookings" className={`text-decoration-none fs-3 ${isActived == 'bookings' ? 'text-primary' : 'text-black'}`}>
                        My bookings
                    </a>
                </li>
            </ul>

            <FaCircleUser
                size={40}
                className='cursor-pointer'
                onClick={handleDropdown}/>
        </div>
    )
}
Navbar.propTypes = {
    isActived: PropTypes.string,
    className: PropTypes.string,
}
export default Navbar;