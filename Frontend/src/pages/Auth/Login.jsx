import background from '../../assets/valeriia-bugaiova.png'
import logo from '../../assets/logo.png'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { loginAuth } from '../../stores/actions/auth.action'

const LoginPage = () =>{
    const dispatch = useDispatch();
    const { dataUser, isAuthenticated, loading, error } = useSelector((state) => state.auth);
    const [user, setUser] = useState({
        username: "",
        password: "",
      });

    const onChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const handleSubmitForm = async (form) => {
        form.preventDefault();
        await dispatch(loginAuth(user));

        await localStorage.setItem("user-token", JSON.stringify(dataUser));

        if (isAuthenticated) {
            window.location.href = "/dashboard";
        }
    };
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
                        <h5 className='text-center my-2'>Login</h5>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Form onSubmit={handleSubmitForm}>
                                <Form.Group className="mb-3" controlId="formBasicUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control size="sm" type="text" name='username' placeholder="Enter username" value={user.username} onChange={onChangeInput} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control size="sm" type="password" name='password' placeholder="Password" value={user.password} onChange={onChangeInput}/>
                                </Form.Group>
                                <div className='w-100 d-flex justify-content-between'>
                                    <p>
                                        Belum punya akun?
                                        <a href="/register" className='text-decoration-none text-primary'> Register</a>
                                    </p>
                                    <a href="#Lupa" className='text-danger text-decoration-none'>
                                        Lupa kata sandi?
                                    </a>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        {loading && <p>Loading...</p>}
                                        <button className='btn w-100'
                                            style={{
                                                backgroundColor:'#63B0DB',
                                                }} 
                                            type="submit"
                                        >Login</button>
                                        {error && <p>{error}</p>}
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

export default LoginPage;