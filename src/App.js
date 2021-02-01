import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="61412d7d-7625-4be4-9d03-3f184e5217e9"
        userName="LiamR"
        userSecret="liamr"
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}
        />
    );
};

export default App;

