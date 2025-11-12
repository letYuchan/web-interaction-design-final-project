// 스토리 타입 정의

export type CharacterRoute = "chunhyang" | "mongryong";

export type CharacterPosition = "left" | "right" | "center";

export interface CharacterSprite {
  name: string;
  image: string;
  position: CharacterPosition;
  emotion?: string; // 추후 감정별 이미지 추가 가능
}

export interface DialogueLine {
  speaker: string; // 화자 이름
  text: string; // 대사
  characterSprites: CharacterSprite[]; // 현재 화면에 표시될 캐릭터들
}

export interface Choice {
  id: string;
  text: string;
  condition?: (stats: GameStats) => boolean; // 특정 스탯이 있어야 선택 가능
  effects: {
    stats?: Partial<GameStats>;
    flags?: string[];
  };
  nextScene: string;
}

export interface StoryScene {
  id: string;
  route: CharacterRoute;
  act: number;
  title: string;
  background: string; // 배경 이미지 경로
  dialogues: DialogueLine[];
  choices?: Choice[];
  autoNextScene?: string; // 선택지 없이 자동으로 다음 씬
}

export interface GameStats {
  // 춘향 루트 스탯
  loyalty: number; // 정절 (0-100)
  courage: number; // 용기 (0-100)
  wisdom: number; // 지혜 (0-100)

  // 몽룡 루트 스탯
  authority: number; // 권위 (0-100)
  intelligence: number; // 지능 (0-100)
  charisma: number; // 매력 (0-100)

  // 공통
  affection: number; // 호감도 (0-100)
  reputation: number; // 평판 (0-100)
}

export interface GameState {
  currentScene: string;
  route: CharacterRoute;
  stats: GameStats;
  flags: Set<string>;
  currentDialogueIndex: number;
  history: string[]; // 방문한 씬 기록
}

export type EndingType = "happy" | "bad1" | "bad2";

export interface Ending {
  id: EndingType;
  title: string;
  description: string;
  condition: (stats: GameStats, flags: Set<string>) => boolean;
  image?: string;
}
