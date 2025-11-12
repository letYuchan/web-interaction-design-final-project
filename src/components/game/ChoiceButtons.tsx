import type { Choice, GameStats } from "../../types/story.types";

interface ChoiceButtonsProps {
  choices: Choice[];
  stats: GameStats;
  onChoice: (choice: Choice) => void;
}

export default function ChoiceButtons({
  choices,
  stats,
  onChoice,
}: ChoiceButtonsProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-3">
        {choices.map((choice) => {
          const isAvailable = !choice.condition || choice.condition(stats);

          return (
            <button
              key={choice.id}
              onClick={() => isAvailable && onChoice(choice)}
              disabled={!isAvailable}
              className={`
                w-full px-6 py-4 rounded-xl border-2 text-left transition-all duration-300
                ${
                  isAvailable
                    ? "bg-black/70 backdrop-blur-sm border-amber-600/70 hover:bg-amber-900/30 hover:border-amber-500 hover:scale-102 cursor-pointer"
                    : "bg-gray-900/50 border-gray-700/50 cursor-not-allowed opacity-50"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-xl mt-0.5">
                  {isAvailable ? "▶" : "🔒"}
                </span>
                <div className="flex-1">
                  <p className="text-amber-50 text-lg leading-relaxed">
                    {choice.text}
                  </p>
                  {!isAvailable && (
                    <p className="text-red-400 text-sm mt-2">
                      (선택 불가: 스탯 부족)
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
