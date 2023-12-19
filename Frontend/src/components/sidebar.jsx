import PropTypes from "prop-types";
import logo from '../assets/logo.png'
import { FaHotel, FaCartShopping, FaUser } from "react-icons/fa6";

const Sidebar = (className) => {
    const data = [
        {
            id: 1,
            title: "Kamar",
            link: "/admin/kamar",
            icon: <FaHotel/>,
        },
        {
            id : 2,
            title: "Cek Pesanan",
            link: "/admin/order",
            icon: <FaCartShopping/>,
        },
        {
            id: 3,
            title: "Admin",
            link: "/admin/user",
            icon: <FaUser/>,
        }
    ];

    return (
        <div className={` ${className}`} style={{
            backgroundColor: '#fff',
            width: '15%',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
            zIndex: 1,
        }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center pt-4">
                        <img src={logo} style={{
                            width:'35%',
                            height: 'auto',
                            }} 
                            alt="logo" />
                        <span className="fw-semibold mx-1 text-center">
                            Admin Page My Hotel
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="row my-3">
                        <hr className="my-0" />
                    </div>
                    {data.map((item) => (
                        <a href={item.link} className={`row my-3 w-100 text-decoration-none`} key={item.id}
                            style={{
                                color: (window.location.pathname) == item.link.toLowerCase() ? '#138FD4' : '#000',
                            }}
                        >
                            <div className="col-2">
                                {item.icon}
                            </div>
                            <div className="col">
                                <span className="fw-semibold text-center">
                                    {item.title}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="w-100 d-flex justify-content-center mt-5">
                    <a className="btn text-white" style={{backgroundColor:"#ACC9DA", width:"85%"}}>
                        Logout
                    </a>
                </div>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.string,
};

export default Sidebar;