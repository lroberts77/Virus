import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";


const MessageForm = (props) => {
    const [value, setvalue] = useState('')
    const { chatId, creds } = props

    const handleSubmit = (event) => {
        event.preventDefault()

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text });
        setvalue('');
    }

    const handleChange = (event) => {

        setvalue(event.target.value);

        isTyping(props, chatId);
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