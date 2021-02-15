const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: "right"}}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'black', textShadow: '0px 0px 10px #23e000, 0px 0px 20px #23e000, 0px 0px 40px #23e000, 0px 0px 80px #23e000' }}>
            {message.text}
        </div>
    );
};

export default MyMessage;