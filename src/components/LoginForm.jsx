import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': "61412d7d-7625-4be4-9d03-3f184e5217e9", 'User-Name': username, 'User-Secret': password }

        try {
            //username | password => chatengine => return messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            
        }


        //if passes => logged in
        // else error => try username/password ......



    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Virus</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Chat</span>
                        </button>
                    </div>
                </form>
            </div> 
        </div>
    )
    
}

export default LoginForm;