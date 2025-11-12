import { useState } from "react";
import chunhyangImg from "../assets/imgs/Chunhyang.png";
import mongryongImg from "../assets/imgs/Mongryong.png";
import titleBg from "../assets/imgs/titleBg.png";

interface Character {
  id: "chunhyang" | "mongryong";
  name: string;
  title: string;
  description: string;
  image: string;
  storyIntro: string;
}

const characters: Character[] = [
  {
    id: "chunhyang",
    name: "성춘향",
    title: "춘향 이야기",
    description: "남원의 퇴기 월매의 딸, 이름난 미녀",
    image: chunhyangImg,
    storyIntro:
      "기생의 딸로 태어났지만 정절을 지키며 사랑하는 이를 기다리는 춘향의 이야기를 경험하세요.",
  },
  {
    id: "mongryong",
    name: "이몽룡",
    title: "몽룡 이야기",
    description: "남원 부사의 아들, 양반가의 후계자",
    image: mongryongImg,
    storyIntro:
      "신분을 넘어선 사랑을 위해 암행어사가 되어 춘향을 구하는 이몽룡의 이야기를 경험하세요.",
  },
];

interface CharacterSelectProps {
  onSelectCharacter: (characterId: "chunhyang" | "mongryong") => void;
  onBack: () => void;
}

export default function CharacterSelect({
  onSelectCharacter,
  onBack,
}: CharacterSelectProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<
    "chunhyang" | "mongryong" | null
  >(null);
  const [hoveredCharacter, setHoveredCharacter] = useState<
    "chunhyang" | "mongryong" | null
  >(null);

  const handleCharacterClick = (characterId: "chunhyang" | "mongryong") => {
    setSelectedCharacter(characterId);
  };

  const handleConfirm = () => {
    if (selectedCharacter) {
      onSelectCharacter(selectedCharacter);
    }
  };

  const selectedChar = characters.find((c) => c.id === selectedCharacter);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* 타이틀 */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
            인물 선택
          </h2>
          <p className="text-lg text-amber-100 drop-shadow-lg">
            누구의 시선으로 이야기를 경험하시겠습니까?
          </p>
        </div>

        {/* 캐릭터 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-5xl">
          {characters.map((character) => (
            <div
              key={character.id}
              onClick={() => handleCharacterClick(character.id)}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              className={`
                relative cursor-pointer transition-all duration-300 transform
                ${
                  selectedCharacter === character.id
                    ? "scale-105 ring-4 ring-amber-400"
                    : "hover:scale-102"
                }
                ${
                  selectedCharacter && selectedCharacter !== character.id
                    ? "opacity-60"
                    : ""
                }
              `}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-amber-600/50 hover:border-amber-400 transition-all">
                {/* 캐릭터 이미지 */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-b from-amber-900/20 to-black/40">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* 선택 오버레이 */}
                  {selectedCharacter === character.id && (
                    <div className="absolute inset-0 bg-amber-400/20 flex items-center justify-center">
                      <div className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-xl">
                        ✓ 선택됨
                      </div>
                    </div>
                  )}
                </div>

                {/* 캐릭터 정보 */}
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {character.name}
                  </h3>
                  <p className="text-amber-300 font-semibold mb-3">
                    {character.title}
                  </p>
                  <p className="text-amber-100 text-sm mb-4">
                    {character.description}
                  </p>

                  {/* 호버 시 추가 정보 */}
                  <div
                    className={`
                    transition-all duration-300 overflow-hidden
                    ${
                      hoveredCharacter === character.id ||
                      selectedCharacter === character.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                  >
                    <div className="pt-4 border-t border-amber-600/30">
                      <p className="text-amber-50 text-sm leading-relaxed">
                        {character.storyIntro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 선택 확인 패널 */}
        {selectedCharacter && (
          <div className="animate-fade-in w-full max-w-2xl bg-black/70 backdrop-blur-sm rounded-lg p-6 border-2 border-amber-500 mb-6">
            <p className="text-center text-amber-100 mb-4">
              <span className="text-amber-300 font-bold text-xl">
                {selectedChar?.name}
              </span>
              (으)로 이야기를 시작하시겠습니까?
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleConfirm}
                className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white font-bold rounded-full 
                         shadow-lg hover:shadow-red-500/50 transition-all duration-300 
                         hover:scale-105 border-2 border-amber-400/50 hover:border-amber-300"
              >
                시작하기
              </button>
              <button
                onClick={() => setSelectedCharacter(null)}
                className="px-8 py-3 bg-gray-700/80 text-white font-bold rounded-full 
                         shadow-lg hover:bg-gray-600 transition-all duration-300 
                         hover:scale-105 border-2 border-gray-500"
              >
                다시 선택
              </button>
            </div>
          </div>
        )}

        {/* 뒤로가기 버튼 */}
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-800/80 text-amber-100 rounded-full 
                   hover:bg-gray-700 transition-all duration-300 border border-amber-600/30"
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
