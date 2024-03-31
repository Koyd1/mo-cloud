import React, {useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/Input";
import {login} from "../actions/user";
import {useDispatch} from "react-redux";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    return (
        <div className='registration'>
            <div className="registration__header">Login</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Exemple@gmail.com" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            <button onClick={() => dispatch(login(email, password))} className="registration__button">Sign In</button>
        </div>
    );
};
export default Login;