import "./ChatInput.css";

const ChatInput = (props) => {
  return (
    <div className="chat_input">
      <input
        onKeyDown={props.send}
        placeholder="Type a message ... Hit Enter to send"
      />
    </div>
  );
};

export default ChatInput;
