const MessageForm = () => {
    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input className="message-input"
                placeholder="send a amessage"
                value={value}
                onChange={handleSubmit}
                />
            </form>
        </div>
    );
};

export default MessageForm;