import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed from './components/ChatFeed';

const App=()=> {
    return (
        <ChatEngine
            height="100vh"
            projectID="d42b0d1e-7845-4a95-b5cd-266ff7b56e64"
            userName="k-darouich"
            userSecret="R130182235"
            renderChatFeed= { (chatAppProps) => <ChatFeed {...chatAppProps}/> }

        />

        
    )
}

export default App;
