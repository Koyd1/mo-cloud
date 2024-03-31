import React, {useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/Input";
import {registration} from "../actions/user";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div className='registration'>
            <div className="registration__header">Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Exemple@gmail.com" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            <button onClick={() => registration(email, password)} className="registration__button">Sign In</button>
        </div>
    );
};

export default Registration;
