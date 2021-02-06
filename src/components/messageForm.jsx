const MessageForm = () => {

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }
    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input className="message-input"
                placeholder="send a amessage"
                value={value}
                onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default MessageForm;