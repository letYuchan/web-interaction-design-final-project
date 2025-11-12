import type { CharacterSprite } from "../../types/story.types";

interface CharacterSpriteProps {
  character: CharacterSprite;
}

export default function CharacterSpriteComponent({
  character,
}: CharacterSpriteProps) {
  const positionClasses = {
    left: "left-12",
    right: "right-12",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`
        absolute bottom-32 ${positionClasses[character.position]}
        transition-all duration-500 ease-out animate-fade-in
      `}
    >
      <div className="relative">
        {/* 캐릭터 이미지 */}
        <img
          src={character.image}
          alt={character.name}
          className="h-96 w-auto object-contain drop-shadow-2xl"
        />

        {/* 캐릭터 이름 표시 */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-600/50">
            <p className="text-amber-300 font-semibold text-sm">
              {character.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
