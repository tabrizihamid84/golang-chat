import { useEffect, useState } from "react";
import "./Message.css";

const Message = (props) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    setMessage(JSON.parse(props.message));
  }, []);

  return <div className="message">{message.body}</div>;
};

export default Message;
