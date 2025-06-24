import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <Layout>
      <div className="text-center space-y-8">
        <div className="minecraft-hero">
          <div className="minecraft-logo">
            <div className="w-16 h-16 bg-minecraft-green minecraft-block mx-auto mb-4"></div>
            <h1 className="text-4xl font-bold text-minecraft-dark minecraft-text mb-2">
              MineCraft Chat
            </h1>
            <p className="text-xl text-minecraft-gray">
              Общайтесь в стиле любимой игры! 🎮
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/chat" className="minecraft-feature-card group">
            <div className="minecraft-feature-icon bg-minecraft-green">
              <Icon name="MessageSquare" size={32} />
            </div>
            <h3 className="text-xl font-bold text-minecraft-dark mb-2">
              💬 Общий чат
            </h3>
            <p className="text-minecraft-gray">
              Отправляйте сообщения с эмодзи и общайтесь с друзьями в реальном
              времени
            </p>
          </Link>

          <Link to="/profile" className="minecraft-feature-card group">
            <div className="minecraft-feature-icon bg-minecraft-blue">
              <Icon name="User" size={32} />
            </div>
            <h3 className="text-xl font-bold text-minecraft-dark mb-2">
              👤 Профиль
            </h3>
            <p className="text-minecraft-gray">
              Просматривайте статистику, достижения и настройки вашего аккаунта
            </p>
          </Link>
        </div>

        <div className="minecraft-container bg-minecraft-light max-w-2xl mx-auto">
          <div className="minecraft-stats-grid">
            <div className="text-center">
              <div className="text-2xl font-bold text-minecraft-green">42</div>
              <div className="text-sm text-minecraft-gray">Игроков онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-minecraft-blue">
                1,234
              </div>
              <div className="text-sm text-minecraft-gray">
                Сообщений сегодня
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-minecraft-purple">
                156
              </div>
              <div className="text-sm text-minecraft-gray">Активных чатов</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
