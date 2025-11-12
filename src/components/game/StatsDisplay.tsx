import type { GameStats, CharacterRoute } from "../../types/story.types";

interface StatsDisplayProps {
  stats: GameStats;
  route: CharacterRoute;
}

export default function StatsDisplay({ stats, route }: StatsDisplayProps) {
  const chunhyangStats = [
    { name: "정절", value: stats.loyalty, color: "text-pink-400" },
    { name: "용기", value: stats.courage, color: "text-red-400" },
    { name: "지혜", value: stats.wisdom, color: "text-blue-400" },
    { name: "호감도", value: stats.affection, color: "text-purple-400" },
  ];

  const mongryongStats = [
    { name: "권위", value: stats.authority, color: "text-yellow-400" },
    { name: "지능", value: stats.intelligence, color: "text-blue-400" },
    { name: "매력", value: stats.charisma, color: "text-green-400" },
    { name: "호감도", value: stats.affection, color: "text-purple-400" },
  ];

  const displayStats = route === "chunhyang" ? chunhyangStats : mongryongStats;

  return (
    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg border border-amber-600/50 p-4 min-w-[200px]">
      <h3 className="text-amber-300 font-bold text-sm mb-3 text-center">
        능력치
      </h3>
      <div className="space-y-2">
        {displayStats.map((stat) => (
          <div key={stat.name} className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className={`${stat.color} font-semibold`}>{stat.name}</span>
              <span className="text-amber-100">{stat.value}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${stat.color.replace(
                  "text",
                  "bg"
                )} transition-all duration-500`}
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
