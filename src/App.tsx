import { useState } from "react";
import titleBg from "./assets/imgs/titleBg.png";
import CharacterSelect from "./components/CharacterSelect";
import GameEngine from "./components/game/GameEngine";
import "./App.css";

type GameScreen = "title" | "characterSelect" | "game";
type CharacterId = "chunhyang" | "mongryong";

function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("title");
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterId | null>(null);

  const handleStartGame = () => {
    setCurrentScreen("characterSelect");
  };

  const handleSelectCharacter = (characterId: CharacterId) => {
    setSelectedCharacter(characterId);
    setCurrentScreen("game");
    // 게임 시작 로직
    console.log(`게임 시작: ${characterId} 선택됨`);
  };

  const handleBackToTitle = () => {
    setCurrentScreen("title");
    setSelectedCharacter(null);
  };

  // 화면 렌더링
  if (currentScreen === "characterSelect") {
    return (
      <CharacterSelect
        onSelectCharacter={handleSelectCharacter}
        onBack={handleBackToTitle}
      />
    );
  }

  if (currentScreen === "game" && selectedCharacter) {
    return <GameEngine route={selectedCharacter} onExit={handleBackToTitle} />;
  }

  // 타이틀 화면
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* 타이틀 */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl tracking-wider">
            春香傳
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-100 drop-shadow-lg">
            춘향전
          </h2>
          <p className="text-lg md:text-xl text-amber-50 mt-4 drop-shadow-md">
            사랑과 정절의 이야기
          </p>
        </div>

        {/* 스토리 소개 */}
        <div className="max-w-2xl bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-8 border-2 border-amber-600/50">
          <p className="text-amber-50 text-center leading-relaxed">
            남원 기생의 딸 춘향과 양반가 후계자 이몽룡의
            <br />
            신분을 넘어선 사랑 이야기.
            <br />
            <span className="text-amber-300 font-semibold">
              당신의 선택으로 춘향의 운명을 결정하세요.
            </span>
          </p>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStartGame}
          className="group relative px-12 py-4 bg-gradient-to-r from-red-700 to-red-900 text-white text-2xl font-bold rounded-full 
                     shadow-2xl hover:shadow-red-500/50 transition-all duration-300 
                     hover:scale-110 hover:from-red-600 hover:to-red-800
                     border-4 border-amber-400/50 hover:border-amber-300"
        >
          <span className="relative z-10">게임 시작</span>
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* 하단 정보 */}
        <div className="absolute bottom-8 text-amber-100 text-sm opacity-70">
          <p>Korean Classic Tale Interactive Simulation</p>
        </div>
      </div>
    </div>
  );
}

export default App;
