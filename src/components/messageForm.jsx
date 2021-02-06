import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";


const MessageForm = () => {
    const [value, setvalue] = useState('')

    const handleSubmit = () => {

    }

    const handleChange = (event) => {

    }
    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input className="message-input"
                placeholder="send a amessage"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                />
            </form>
        </div>
    );
};

export default MessageForm;