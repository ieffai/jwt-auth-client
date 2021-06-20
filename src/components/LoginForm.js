import React from 'react'
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const  store = React.useContext(Context);
    // const signIn = () => {
    //     store.login(email, password);
    // }
    // const signUp = () => {
    //     store.registration(email, password);
    // }
    
    return (
        <div>
            <input
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                type='text'
                placeholder='Email'
            />
            <input
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Password'
            />
            {/* <button onClick={signIn}>Sign In</button>
            <button onClick={signUp}>Sign Up</button> */}
            <button onClick={() => store.login(email, password)}>Sign In</button>
            <button onClick={() => store.registration(email, password)}>Sign Up</button>

        </div>
    )
}

export default observer(LoginForm);
