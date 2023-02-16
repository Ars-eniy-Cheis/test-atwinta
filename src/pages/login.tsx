import LoginTextInput from "../components/StandardComponents/Inputs/TextInputs/LoginInput";

import BlueButton from "../components/StandardComponents/Buttons/BlueButton";
import GreenButton from "../components/StandardComponents/Buttons/GreenButton";

const Login = (): JSX.Element => {
    return (
        <div className='mx-auto max-w-5xl'>
            <center>
                <h2 className='text-2xl mb-10'>
                    Авторизация
                </h2>
            </center>
            <div className='mx-64'>
                <LoginTextInput type='email' label='Ваш email' placeholder='' />
                <LoginTextInput type='password' label='Пароль' placeholder='' />
                <div>
                    <GreenButton onClick={() => { }}>Войти</GreenButton>
                    <BlueButton onClick={() => { }}>Регистрация</BlueButton>
                </div>
            </div>
        </div>
    );
};

export default Login;