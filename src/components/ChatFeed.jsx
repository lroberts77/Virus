import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import { CircularProgress } from '@material-ui/core';
import useStyles from './chatstyles';


const ChatFeed = (props) => {
    const classes = useStyles();
    const { chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => 
        chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`, }}
            />
    ));

    const handleClick = () => {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');

        window.location.reload()
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index -1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage ? 
                            <MyMessage message={message}/>
                            : <TheirMessage message={message} lastmessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : "0px", marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })    
    }

    // if there is no chat return loading
    if(!chat) return <CircularProgress className={classes.progress} />;

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <button className="btn-signout" onClick={handleClick}>sign out</button>
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">{chat.people.map((person) => ` ${person.person.username}`)}</div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px'}} />
            <div className="message-form-container">
                <MessageForm { ...props } chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;