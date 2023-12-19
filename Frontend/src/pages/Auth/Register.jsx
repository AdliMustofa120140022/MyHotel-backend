import background from '../../assets/valeriia-bugaiova.png'
import logo from '../../assets/logo.png'
import Form from 'react-bootstrap/Form';

const RegistPage = () =>{
    return (
    <div className="App w-100 min-vh-100">
        <div className="absolute text-white min-vh-100 d-flex align-items-center justify-content-center" style={{zIndex: '10'}}>
            <div className='card p-5' style={{width:'35%'}}>
                <div className='col'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <img src={logo} style={{
                            width:'25%',
                            }} 
                            alt="logo" />
                        <h5 className='text-center my-2'>Register</h5>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control size="sm" type="text" name='username' placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="sm" type="email" name='email' placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control size="sm" type="password" name='password' placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhoto">
                                    <Form.Label>Upload Foto Profile</Form.Label>
                                    <Form.Control size="sm" type="file" name='photo'/>
                                </Form.Group>
                                <div className='w-100 d-flex justify-content-between'>
                                    <p>
                                        Sudah punya akun?
                                        <a href="/login" className='text-decoration-none text-primary'> Login</a>
                                    </p>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn w-100'
                                            style={{
                                                backgroundColor:'#63B0DB',
                                                }} 
                                        >Register</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={background} style={{
            minWidth: '1024px',
            maxHeight: '100%',
            width: '100%',
            height: 'auto',
            position: 'fixed',
            top: 0,
            left: 0,
            objectFit: 'cover',
            zIndex: '-1'
            }} 
            alt="logo" />
    </div>
    );
  }

export default RegistPage;