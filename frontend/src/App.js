import { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import Header from "./components/Header/Header";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    console.log("out");
    connect((msg) => {
      console.log("New Message");
      setChatHistory([...chatHistory, msg]);
      console.log({ chatHistory });
    });
  });

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
