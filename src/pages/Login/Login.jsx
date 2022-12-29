import React, {useContext, useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import './Login.scss';
import Button from "../../components/Button/Button";
import UserContext from "../../context/user/User.context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {
        getUserByLogin,
    } = useContext(UserContext);
    const [failed, setFailed] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        const rut = event.target.rut.value;
        const password = event.target.password.value;
        try {
            const response = await getUserByLogin(rut, password)
            if (response !== 200) {
                setFailed(true)
            } else {
                localStorage.setItem("isLogin", 'true');
                return navigate('/home')
            }
        } catch (e) {
            setFailed(true)
        }
    }

    return (
        <>
            <Header home={true}/>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className='container-form'>
                        <Input
                            label='Rut'
                            id='rut'
                            type='text'
                            placeholder='12345678-9'
                        />
                        <Input
                            label='Contraseña'
                            id='password'
                            type='password'
                            placeholder='●●●●●●'
                        />
                        <Button
                            label='Ingresar'
                            type='submit'
                            variant='success'
                        />
                    </div>
                </form>
                <div className='container-form'>
                    {
                        failed &&
                        <div className='alert-danger'>
                            Los datos ingresados no son correctos, por favor inténtelo nuevamente.
                        </div>
                    }
                </div>
            </Container>
        </>
    );
};

export default Login;