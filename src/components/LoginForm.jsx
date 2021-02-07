import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

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