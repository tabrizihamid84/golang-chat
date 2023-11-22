import { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import Header from "./components/Header/Header";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory([...chatHistory], msg);
      console.log(chatHistory);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={sendMsg} />
    </div>
  );
};

export default App;
