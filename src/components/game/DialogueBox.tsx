import type { DialogueLine } from "../../types/story.types";

interface DialogueBoxProps {
  dialogue: DialogueLine;
  onNext: () => void;
  canProgress: boolean;
}

export default function DialogueBox({
  dialogue,
  onNext,
  canProgress,
}: DialogueBoxProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 animate-fade-in">
      {/* 대화창 */}
      <div className="max-w-5xl mx-auto bg-black/85 backdrop-blur-sm rounded-2xl border-2 border-amber-600/70 shadow-2xl">
        {/* 화자 이름 */}
        <div className="px-6 py-3 border-b border-amber-600/50">
          <h3 className="text-xl font-bold text-amber-300">
            {dialogue.speaker}
          </h3>
        </div>

        {/* 대사 내용 */}
        <div className="px-6 py-6">
          <p className="text-lg text-amber-50 leading-relaxed whitespace-pre-wrap">
            {dialogue.text}
          </p>
        </div>

        {/* 진행 표시 */}
        {canProgress && (
          <div className="px-6 pb-4 flex justify-end">
            <button
              onClick={onNext}
              className="px-4 py-2 bg-amber-600/50 hover:bg-amber-600 text-white rounded-lg 
                       transition-all duration-300 text-sm flex items-center gap-2"
            >
              <span>다음</span>
              <span className="animate-pulse">▶</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
