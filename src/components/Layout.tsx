import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-minecraft-grass">
      <header className="bg-minecraft-dark border-b-4 border-minecraft-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-minecraft-green minecraft-block"></div>
            <h1 className="text-2xl font-bold text-white minecraft-text">
              MineCraft Chat
            </h1>
          </div>

          <nav className="flex space-x-4">
            <Link
              to="/"
              className={`minecraft-btn ${isActive("/") ? "minecraft-btn-active" : "minecraft-btn-normal"}`}
            >
              <Icon name="Home" size={20} />
              <span>Главная</span>
            </Link>
            <Link
              to="/chat"
              className={`minecraft-btn ${isActive("/chat") ? "minecraft-btn-active" : "minecraft-btn-normal"}`}
            >
              <Icon name="MessageSquare" size={20} />
              <span>Чат</span>
            </Link>
            <Link
              to="/profile"
              className={`minecraft-btn ${isActive("/profile") ? "minecraft-btn-active" : "minecraft-btn-normal"}`}
            >
              <Icon name="User" size={20} />
              <span>Профиль</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
