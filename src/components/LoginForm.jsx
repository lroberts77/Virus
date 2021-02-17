import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': `${process.env.REACT_APP_ID}`, 'User-Name': username, 'User-Secret': password }

        try {
            //username | password => chatengine => return messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            seterror('incorrect username or password.') 
        }
        //if passes => logged in
        // else error => try username/password ......
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Virus²</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input-form" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input-form" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span className="button-text">INFECT</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div> 
        </div>
    )
    
}

export default LoginForm;