import type { StoryScene } from "../../../types/story.types";
import titleBg from "../../../assets/imgs/titleBg.png";
import chunhyangImg from "../../../assets/imgs/Chunhyang.png";
import mongryongImg from "../../../assets/imgs/Mongryong.png";

export const chunhyangScenes: Record<string, StoryScene> = {
  // Scene 1: 광한루에서의 만남
  scene_1_1: {
    id: "scene_1_1",
    route: "chunhyang",
    act: 1,
    title: "광한루에서의 만남",
    background: titleBg,
    dialogues: [
      {
        speaker: "춘향",
        text: "오늘은 단오날이라 그네를 타러 왔어요, 향단아.",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "향단",
        text: "아가씨, 저기 양반 도련님께서 이쪽을 보고 계세요!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(가슴이 두근거린다... 저 분은 누구실까?)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_1_1_a",
        text: "저 양반은 누구실까? 눈이 마주쳤네...",
        effects: {
          stats: { affection: 10 },
        },
        nextScene: "scene_1_2",
      },
      {
        id: "choice_1_1_b",
        text: "시선을 피하고 그네를 탄다",
        effects: {
          stats: { affection: 5, wisdom: 5 },
        },
        nextScene: "scene_1_2",
      },
    ],
  },

  // Scene 2: 방자의 전갈
  scene_1_2: {
    id: "scene_1_2",
    route: "chunhyang",
    act: 1,
    title: "방자의 전갈",
    background: titleBg,
    dialogues: [
      {
        speaker: "방자",
        text: "아가씨, 저희 도련님께서 아가씨를 뵙고 싶어 하십니다.",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(남원 부사 댁의 도련님이라니... 어떻게 해야 하지?)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_1_2_a",
        text: "양반 도련님을 어찌 만나요? (정중히 거절)",
        effects: {
          stats: { wisdom: 10 },
        },
        nextScene: "scene_1_3",
      },
      {
        id: "choice_1_2_b",
        text: "한 번쯤은... 만나볼까요?",
        effects: {
          stats: { affection: 15, courage: 5 },
        },
        nextScene: "scene_1_3",
      },
    ],
  },

  // Scene 3: 몽룡과의 사랑 맹세
  scene_1_3: {
    id: "scene_1_3",
    route: "chunhyang",
    act: 1,
    title: "사랑의 맹세",
    background: titleBg,
    dialogues: [
      {
        speaker: "이몽룡",
        text: "신분은 다르지만, 제 마음은 진심입니다, 춘향.",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(이렇게 진심으로 대해주시는 분은 처음이야...)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_1_3_a",
        text: "저도 마음이 있어요, 도련님.",
        effects: {
          stats: { loyalty: 20, affection: 20 },
          flags: ["love_confession"],
        },
        nextScene: "scene_2_1",
      },
      {
        id: "choice_1_3_b",
        text: "신분 차이가 걱정돼요...",
        effects: {
          stats: { wisdom: 10, affection: 10 },
        },
        nextScene: "scene_2_1",
      },
    ],
  },

  // Scene 4: 이별의 순간
  scene_2_1: {
    id: "scene_2_1",
    route: "chunhyang",
    act: 2,
    title: "이별의 순간",
    background: titleBg,
    dialogues: [
      {
        speaker: "이몽룡",
        text: "춘향... 아버지께서 동부승지로 승진하셔서 한양으로 가신다네.",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "이몽룡",
        text: "나도 함께 가야 해. 미안하오...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(눈물이 나려고 한다... 어떻게 해야 하지?)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_2_1_a",
        text: "기다릴게요. 꼭 돌아와 주세요.",
        effects: {
          stats: { loyalty: 30, affection: 20 },
          flags: ["promised_to_wait"],
        },
        nextScene: "scene_2_2",
      },
      {
        id: "choice_2_1_b",
        text: "저도 데려가 주세요!",
        effects: {
          stats: { courage: 10, affection: 10 },
        },
        nextScene: "scene_2_2",
      },
    ],
  },

  // Scene 5: 기다림의 나날
  scene_2_2: {
    id: "scene_2_2",
    route: "chunhyang",
    act: 2,
    title: "기다림의 나날",
    background: titleBg,
    dialogues: [
      {
        speaker: "춘향",
        text: "도련님이 떠나신 지 벌써 몇 달이 지났다...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "편지가 오지 않네... 하지만 약속을 믿어야지.",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "월매",
        text: "춘향아, 너무 애태우지 말거라. 양반 도련님이 기생 딸을 잊지 않을까...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_2_2_a",
        text: "아니에요, 도련님은 꼭 돌아오실 거예요!",
        effects: {
          stats: { loyalty: 20, affection: 10 },
        },
        nextScene: "scene_3_1",
      },
      {
        id: "choice_2_2_b",
        text: "불안하지만... 희망을 잃지 않을래요.",
        effects: {
          stats: { loyalty: 10, wisdom: 5 },
        },
        nextScene: "scene_3_1",
      },
      {
        id: "choice_2_2_c",
        text: "어머니 말씀이 맞을지도...",
        effects: {
          stats: { loyalty: -10, affection: -10 },
        },
        nextScene: "scene_3_1",
      },
    ],
  },

  // Scene 6: 변학도의 수청 요구
  scene_3_1: {
    id: "scene_3_1",
    route: "chunhyang",
    act: 3,
    title: "변학도의 수청 요구",
    background: titleBg,
    dialogues: [
      {
        speaker: "변학도",
        text: "네가 그 유명한 성춘향이로구나. 오늘부터 나의 수청을 들도록!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "사또 나리, 저는 이미 한 사람과 백년가약을 맺었습니다!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "변학도",
        text: "감히 기생 주제에 사또의 명을 거역하느냐!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_3_1_a",
        text: "죽어도 절개는 지키겠습니다!",
        effects: {
          stats: { loyalty: 40, courage: 20 },
          flags: ["refused_byeonhakdo"],
        },
        nextScene: "scene_3_2",
      },
      {
        id: "choice_3_1_b",
        text: "시간을 주세요... 생각할 시간이...",
        effects: {
          stats: { loyalty: 10, wisdom: 10 },
        },
        nextScene: "scene_3_2",
      },
      {
        id: "choice_3_1_c",
        text: "어쩔 수 없이... 받아들이겠습니다.",
        effects: {
          stats: { loyalty: -50, affection: -30 },
          flags: ["accepted_byeonhakdo"],
        },
        nextScene: "ending_bad1",
      },
    ],
  },

  // Scene 7: 옥중의 고난
  scene_3_2: {
    id: "scene_3_2",
    route: "chunhyang",
    act: 3,
    title: "옥중의 고난",
    background: titleBg,
    dialogues: [
      {
        speaker: "춘향",
        text: "(감옥에 갇힌 지 며칠이 지났다... 몸은 아프지만 마음은 변치 않는다)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "포졸",
        text: "춘향, 아직도 고집을 부리겠느냐? 사또께서 매를 치라 하셨다!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "몽룡 도련님... 저 춘향이를 잊으셨나요...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_3_2_a",
        text: "끝까지 버틴다! 도련님을 믿어!",
        condition: (stats) => stats.loyalty >= 60,
        effects: {
          stats: { loyalty: 30, courage: 20 },
          flags: ["survived_torture"],
        },
        nextScene: "scene_3_3",
      },
      {
        id: "choice_3_2_b",
        text: "고통스럽지만... 희망을 품는다.",
        effects: {
          stats: { loyalty: 10, courage: 5 },
        },
        nextScene: "scene_3_3",
      },
      {
        id: "choice_3_2_c",
        text: "너무 고통스러워... 포기하고 싶다...",
        condition: (stats) => stats.loyalty < 40,
        effects: {
          stats: { loyalty: -30, courage: -20 },
        },
        nextScene: "ending_bad2",
      },
    ],
  },

  // Scene 8: 거지 몽룡의 방문
  scene_3_3: {
    id: "scene_3_3",
    route: "chunhyang",
    act: 3,
    title: "의문의 거지",
    background: titleBg,
    dialogues: [
      {
        speaker: "춘향",
        text: "(누가 오는 소리가 들린다...)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "거지",
        text: "춘향... 나요...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(이 목소리... 설마...?)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
    ],
    choices: [
      {
        id: "choice_3_3_a",
        text: "도련님이신가요? 그 목소리...",
        effects: {
          stats: { affection: 30 },
          flags: ["recognized_mongryong"],
        },
        nextScene: "scene_3_4",
      },
      {
        id: "choice_3_3_b",
        text: "누구세요? 무서워요...",
        effects: {
          stats: { affection: 5 },
        },
        nextScene: "scene_3_4",
      },
    ],
  },

  // Scene 9: 어사출두 준비
  scene_3_4: {
    id: "scene_3_4",
    route: "chunhyang",
    act: 3,
    title: "생일 잔치",
    background: titleBg,
    dialogues: [
      {
        speaker: "변학도",
        text: "오늘은 나의 생일이다! 춘향을 끌어내어 마지막으로 물어보도록!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "(이제 끝인가... 도련님...)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "???",
        text: "잠깐! 암행어사 출두야!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "도련님!!!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
    ],
    autoNextScene: "ending_check",
  },

  // 엔딩 체크 (조건에 따라 분기)
  ending_check: {
    id: "ending_check",
    route: "chunhyang",
    act: 3,
    title: "운명의 순간",
    background: titleBg,
    dialogues: [
      {
        speaker: "시스템",
        text: "당신의 선택이 운명을 결정합니다...",
        characterSprites: [],
      },
    ],
    autoNextScene: "ending_happy", // 실제로는 조건 체크 후 분기
  },

  // 해피 엔딩
  ending_happy: {
    id: "ending_happy",
    route: "chunhyang",
    act: 3,
    title: "해피 엔딩 - 사랑의 결실",
    background: titleBg,
    dialogues: [
      {
        speaker: "이몽룡",
        text: "변학도, 네 죄를 낱낱이 밝혀 엄히 다스리겠다!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "이몽룡",
        text: "춘향, 미안하오. 이렇게 늦어서...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "도련님... 저는 믿고 있었어요. 꼭 돌아오실 거라고...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "내레이션",
        text: "춘향은 불의에 굴하지 않고 정절을 지킨 결과, 당당히 양반의 정실부인이 되었습니다.",
        characterSprites: [],
      },
      {
        speaker: "내레이션",
        text: "이몽룡은 벼슬이 좌의정까지 올라 춘향과 함께 행복하게 살았습니다.",
        characterSprites: [],
      },
      {
        speaker: "내레이션",
        text: "- 해피 엔딩 -",
        characterSprites: [],
      },
    ],
  },

  // 배드 엔딩 1: 정절 상실
  ending_bad1: {
    id: "ending_bad1",
    route: "chunhyang",
    act: 3,
    title: "배드 엔딩 - 잃어버린 절개",
    background: titleBg,
    dialogues: [
      {
        speaker: "춘향",
        text: "(결국... 나는 변학도의 수청을 받아들이고 말았다...)",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "내레이션",
        text: "며칠 후, 이몽룡이 암행어사로 남원에 돌아왔습니다.",
        characterSprites: [],
      },
      {
        speaker: "이몽룡",
        text: "춘향... 어찌 이런 일이...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "도련님... 죄송해요... 너무 늦게 오셨어요...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "right",
          },
        ],
      },
      {
        speaker: "내레이션",
        text: "춘향은 자책과 슬픔 속에서 외로운 삶을 살게 되었습니다.",
        characterSprites: [],
      },
      {
        speaker: "내레이션",
        text: "- 배드 엔딩: 잃어버린 절개 -",
        characterSprites: [],
      },
    ],
  },

  // 배드 엔딩 2: 죽음
  ending_bad2: {
    id: "ending_bad2",
    route: "chunhyang",
    act: 3,
    title: "배드 엔딩 - 너무 늦은 구원",
    background: titleBg,
    dialogues: [
      {
        speaker: "변학도",
        text: "끝까지 고집을 부리는구나. 이제 처형하도록!",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "left",
          },
        ],
      },
      {
        speaker: "춘향",
        text: "도련님... 사랑했어요...",
        characterSprites: [
          {
            name: "춘향",
            image: chunhyangImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "내레이션",
        text: "춘향은 끝까지 정절을 지켰지만, 이몽룡이 도착하기 전에 목숨을 잃고 말았습니다.",
        characterSprites: [],
      },
      {
        speaker: "이몽룡",
        text: "춘향!!! 내가 왔소! ...아니, 이럴 수가...",
        characterSprites: [
          {
            name: "이몽룡",
            image: mongryongImg,
            position: "center",
          },
        ],
      },
      {
        speaker: "내레이션",
        text: "늦게 도착한 몽룡은 춘향의 죽음을 막지 못하고 평생 후회하며 살았습니다.",
        characterSprites: [],
      },
      {
        speaker: "내레이션",
        text: "- 배드 엔딩: 너무 늦은 구원 -",
        characterSprites: [],
      },
    ],
  },
};
