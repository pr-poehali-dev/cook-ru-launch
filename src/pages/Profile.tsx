import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const userStats = [
    { label: "Сообщений отправлено", value: "1,234", icon: "MessageSquare" },
    { label: "Дней в сети", value: "45", icon: "Calendar" },
    { label: "Уровень", value: "12", icon: "Trophy" },
    { label: "Достижений", value: "8", icon: "Award" },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="minecraft-container bg-minecraft-light">
          <div className="minecraft-panel-header text-center">
            <div className="minecraft-profile-avatar">😊</div>
            <h1 className="text-3xl font-bold text-minecraft-dark minecraft-text">
              Юзер
            </h1>
            <p className="text-minecraft-gray">
              🟢 В сети • Присоединился 45 дней назад
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {userStats.map((stat, index) => (
            <div key={index} className="minecraft-container bg-minecraft-light">
              <div className="minecraft-stat-card">
                <div className="minecraft-stat-icon">
                  <Icon name={stat.icon as any} size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-minecraft-green">
                    {stat.value}
                  </div>
                  <div className="text-minecraft-gray">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="minecraft-container bg-minecraft-light">
          <div className="minecraft-panel-header">
            <h2 className="text-xl font-bold text-minecraft-dark">
              🏆 Достижения
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "🗣️ Болтун",
              "⚡ Быстрые пальцы",
              "🎯 Меткий стрелок",
              "👑 VIP",
            ].map((achievement, index) => (
              <div key={index} className="minecraft-achievement">
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {achievement.split(" ")[0]}
                  </div>
                  <div className="text-sm font-bold text-minecraft-dark">
                    {achievement.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
