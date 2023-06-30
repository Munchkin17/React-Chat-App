import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="538663a2-a8e1-4a0b-8a2a-6b0839f9cdd5"
      userName="TaeTae"
      userSecret="20130613"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
    
  );
}


export default App;
