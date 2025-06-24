import { useState } from "react";
import Layout from "@/components/Layout";
import MessageInput from "@/components/MessageInput";
import MessageList from "@/components/MessageList";

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  username: string;
  avatar: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Привет всем! 👋",
      timestamp: new Date(Date.now() - 10000),
      username: "Steve",
      avatar: "🧑‍🚀",
    },
    {
      id: "2",
      text: "Кто готов к новому приключению? ⚔️🏰",
      timestamp: new Date(Date.now() - 5000),
      username: "Alex",
      avatar: "👩‍🦰",
    },
  ]);

  const addMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      username: "Юзер",
      avatar: "😊",
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <Layout>
      <div className="minecraft-container bg-minecraft-light">
        <div className="minecraft-panel-header">
          <h2 className="text-2xl font-bold text-minecraft-dark">
            💬 Общий чат
          </h2>
          <div className="text-sm text-minecraft-gray">
            Участников онлайн: 42 🟢
          </div>
        </div>

        <div className="flex flex-col h-[600px]">
          <MessageList messages={messages} />
          <MessageInput onSendMessage={addMessage} />
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
