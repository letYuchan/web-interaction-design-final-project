import { useState, useEffect } from "react";
import type {
  GameState,
  GameStats,
  CharacterRoute,
  Choice,
  StoryScene,
} from "../../types/story.types";
import { chunhyangScenes } from "../../data/stories/chunhyang/scenes";
import DialogueBox from "./DialogueBox";
import ChoiceButtons from "./ChoiceButtons";
import CharacterSpriteComponent from "./CharacterSprite";
import StatsDisplay from "./StatsDisplay";

interface GameEngineProps {
  route: CharacterRoute;
  onExit: () => void;
}

const initialStats: GameStats = {
  loyalty: 0,
  courage: 0,
  wisdom: 0,
  authority: 0,
  intelligence: 0,
  charisma: 0,
  affection: 0,
  reputation: 0,
};

export default function GameEngine({ route, onExit }: GameEngineProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: "scene_1_1",
    route,
    stats: { ...initialStats },
    flags: new Set<string>(),
    currentDialogueIndex: 0,
    history: [],
  });

  const [showChoices, setShowChoices] = useState(false);
  const [isEnding, setIsEnding] = useState(false);

  // 현재 씬 가져오기
  const getCurrentScene = (): StoryScene | undefined => {
    if (route === "chunhyang") {
      return chunhyangScenes[gameState.currentScene];
    }
    // 몽룡 루트는 추후 추가
    return undefined;
  };

  const currentScene = getCurrentScene();

  // 엔딩 조건 체크
  const checkEnding = () => {
    const { stats, flags } = gameState;

    // 정절 상실 엔딩
    if (flags.has("accepted_byeonhakdo")) {
      goToScene("ending_bad1");
      return;
    }

    // 죽음 엔딩 (정절은 있지만 스탯 부족)
    if (stats.loyalty < 80 || stats.affection < 60) {
      goToScene("ending_bad2");
      return;
    }

    // 해피 엔딩
    goToScene("ending_happy");
  };

  // 씬 변경 시 대화 인덱스 리셋
  useEffect(() => {
    setGameState((prev) => ({ ...prev, currentDialogueIndex: 0 }));
    setShowChoices(false);

    // 엔딩 체크
    if (currentScene?.id.startsWith("ending")) {
      setIsEnding(true);
    }

    // 엔딩 조건 자동 체크
    if (currentScene?.id === "ending_check") {
      checkEnding();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.currentScene, currentScene?.id]);

  // 다음 대사로 진행
  const handleNextDialogue = () => {
    if (!currentScene) return;

    const nextIndex = gameState.currentDialogueIndex + 1;

    if (nextIndex < currentScene.dialogues.length) {
      // 다음 대사로
      setGameState((prev) => ({ ...prev, currentDialogueIndex: nextIndex }));
    } else {
      // 대사가 끝났을 때
      if (currentScene.choices && currentScene.choices.length > 0) {
        // 선택지 표시
        setShowChoices(true);
      } else if (currentScene.autoNextScene) {
        // 자동으로 다음 씬
        goToScene(currentScene.autoNextScene);
      }
    }
  };

  // 선택지 처리
  const handleChoice = (choice: Choice) => {
    // 스탯 업데이트
    if (choice.effects.stats) {
      setGameState((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          loyalty: Math.max(
            0,
            Math.min(
              100,
              prev.stats.loyalty + (choice.effects.stats?.loyalty || 0)
            )
          ),
          courage: Math.max(
            0,
            Math.min(
              100,
              prev.stats.courage + (choice.effects.stats?.courage || 0)
            )
          ),
          wisdom: Math.max(
            0,
            Math.min(
              100,
              prev.stats.wisdom + (choice.effects.stats?.wisdom || 0)
            )
          ),
          affection: Math.max(
            0,
            Math.min(
              100,
              prev.stats.affection + (choice.effects.stats?.affection || 0)
            )
          ),
          authority: Math.max(
            0,
            Math.min(
              100,
              prev.stats.authority + (choice.effects.stats?.authority || 0)
            )
          ),
          intelligence: Math.max(
            0,
            Math.min(
              100,
              prev.stats.intelligence +
                (choice.effects.stats?.intelligence || 0)
            )
          ),
          charisma: Math.max(
            0,
            Math.min(
              100,
              prev.stats.charisma + (choice.effects.stats?.charisma || 0)
            )
          ),
          reputation: Math.max(
            0,
            Math.min(
              100,
              prev.stats.reputation + (choice.effects.stats?.reputation || 0)
            )
          ),
        },
      }));
    }

    // 플래그 추가
    if (choice.effects.flags) {
      setGameState((prev) => ({
        ...prev,
        flags: new Set([...prev.flags, ...choice.effects.flags!]),
      }));
    }

    // 다음 씬으로 이동
    goToScene(choice.nextScene);
  };

  // 씬 이동
  const goToScene = (sceneId: string) => {
    setGameState((prev) => ({
      ...prev,
      currentScene: sceneId,
      history: [...prev.history, prev.currentScene],
    }));
  };

  // 게임 종료
  const handleExit = () => {
    if (
      window.confirm(
        isEnding
          ? "메인 메뉴로 돌아가시겠습니까?"
          : "진행 중인 게임을 종료하시겠습니까? (저장되지 않습니다)"
      )
    ) {
      onExit();
    }
  };

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <p className="text-xl mb-4">씬을 불러올 수 없습니다.</p>
          <button
            onClick={onExit}
            className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const currentDialogue =
    currentScene.dialogues[gameState.currentDialogueIndex];
  const canProgress =
    gameState.currentDialogueIndex < currentScene.dialogues.length;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentScene.background})` }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 게임 컨텐츠 */}
      <div className="relative z-10 min-h-screen">
        {/* 상단 UI */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button
            onClick={handleExit}
            className="px-4 py-2 bg-black/70 backdrop-blur-sm text-amber-100 rounded-lg 
                     border border-amber-600/50 hover:bg-black/90 transition-all text-sm"
          >
            ← 나가기
          </button>
          <div className="px-4 py-2 bg-black/70 backdrop-blur-sm text-amber-300 rounded-lg border border-amber-600/50">
            <p className="text-sm font-semibold">{currentScene.title}</p>
          </div>
        </div>

        {/* 스탯 디스플레이 */}
        <StatsDisplay stats={gameState.stats} route={route} />

        {/* 캐릭터 스프라이트 */}
        {currentDialogue?.characterSprites.map((sprite, index) => (
          <CharacterSpriteComponent
            key={`${sprite.name}-${index}`}
            character={sprite}
          />
        ))}

        {/* 대화창 또는 선택지 */}
        {!showChoices ? (
          <DialogueBox
            dialogue={currentDialogue}
            onNext={handleNextDialogue}
            canProgress={canProgress}
          />
        ) : (
          currentScene.choices && (
            <ChoiceButtons
              choices={currentScene.choices}
              stats={gameState.stats}
              onChoice={handleChoice}
            />
          )
        )}

        {/* 엔딩 화면 추가 버튼 - 대화가 모두 끝난 후에만 표시 */}
        {isEnding && !canProgress && !showChoices && (
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
            <button
              onClick={onExit}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xl font-bold rounded-full
                       shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110
                       border-2 border-amber-400"
            >
              메인 메뉴로
            </button>
          </div>
        )}
      </div>

      {/* 클릭으로 대화 진행 (선택지 없을 때) */}
      {!showChoices && canProgress && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleNextDialogue}
          style={{ zIndex: 5 }}
        />
      )}
    </div>
  );
}
