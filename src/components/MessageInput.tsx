import { useState } from "react";
import Icon from "@/components/ui/icon";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const emojis = ["😊", "😂", "❤️", "👍", "🎮", "⚔️", "🏰", "💎", "🔥", "⭐"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const addEmoji = (emoji: string) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <div className="minecraft-input-container">
      <div className="minecraft-emoji-panel">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => addEmoji(emoji)}
            className="minecraft-emoji-btn"
          >
            {emoji}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Напишите сообщение..."
          className="minecraft-input flex-1"
          maxLength={500}
        />

        <button
          type="submit"
          disabled={!message.trim()}
          className="minecraft-btn minecraft-btn-send"
        >
          <Icon name="Send" size={20} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
