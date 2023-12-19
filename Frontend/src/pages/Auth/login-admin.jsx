import logo from '../../assets/logo.png'
import imageLeft from '../../assets/login-admin.png'
import Form from 'react-bootstrap/Form';

const LoginAdmin = () =>{
    return (
    <div className='w-100 min-vh-100 row overflow-y-hidden'>
        <div className='col'>
            <div className='row d-flex justify-content-center align-items-center' style={{
                height: '100vh',
                }}>
                <img src={imageLeft} style={{
                    top: 0,
                    left: 0,
                    objectFit: 'cover',}}
                    alt="logo" />
            </div>
        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center w-50'>
                <img src={logo} style={{
                    width:'35%',
                    }} 
                    alt="logo" />
            </div>
            <Form className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>Username</Form.Label>
                    <Form.Control size="sm" type="user" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="sm" type="password" placeholder="Password" />
                </Form.Group>
                <div className='row justify-content-center'>
                    <button className='btn w-50'
                        style={{
                            backgroundColor:'#63B0DB',
                            }} 
                    >Login</button>
                </div>
            </Form>
        </div>
    </div>
    );
}

export default LoginAdmin