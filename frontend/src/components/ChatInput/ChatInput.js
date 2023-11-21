const ChatInput = (props) => {
  return (
    <div className="chatInput">
      <input
        onkeyDown={props.send}
        placeholder="Type a message ... Hit Enter to send"
      />
    </div>
  );
};

export default ChatInput;
