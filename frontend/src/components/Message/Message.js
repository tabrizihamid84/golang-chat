import { useEffect, useState } from "react";
import "./Message.css";

const Message = (props) => {
  const [message, _] = useState(JSON.parse(props.message));

  return <div className="message">{message.body}</div>;
};

export default Message;
