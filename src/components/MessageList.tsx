import { useEffect, useRef } from "react";
import { Message } from "@/pages/Chat";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 minecraft-scroll">
      {messages.map((message) => (
        <div key={message.id} className="minecraft-message">
          <div className="flex items-start space-x-3">
            <div className="minecraft-avatar">{message.avatar}</div>

            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-minecraft-dark minecraft-username">
                  {message.username}
                </span>
                <span className="text-xs text-minecraft-gray">
                  {formatTime(message.timestamp)}
                </span>
              </div>

              <div className="minecraft-message-bubble">{message.text}</div>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
