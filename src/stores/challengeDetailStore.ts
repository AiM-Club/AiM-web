import type { ChallengeInfo, Dominance, ParticipantsInfo, ChallengeDetailWeeksResponse, ProgressList } from "@/types/challengeDetail";
import { create } from "zustand";

interface ChallengeDetailStore {
  challengeId: number | null;
  challengeInfo: ChallengeInfo | null;
  dominance: Dominance | null;
  myInfo: ParticipantsInfo | null;
  opponentInfo: ParticipantsInfo | null;
  thumbnail: Blob | null;
  myPhoto: Blob | null;
  opponentPhoto: Blob | null;
  challengeDetailWeeks: ChallengeDetailWeeksResponse | null;
  progressListMap: Record<number, ProgressList>;
  setChallengeInfo: (challengeInfo: ChallengeInfo) => void;
  setChallengeId: (challengeId: number | null) => void;
  setDominance: (dominance: Dominance) => void;
  setMyInfo: (myInfo: ParticipantsInfo) => void;
  setOpponentInfo: (opponentInfo: ParticipantsInfo | null) => void;
  setThumbnail: (thumbnail: Blob | null) => void;
  setMyPhoto: (myPhoto: Blob | null) => void;
  setOpponentPhoto: (opponentPhoto: Blob | null) => void;
  setChallengeDetailWeeks: (weeks: ChallengeDetailWeeksResponse) => void;
  resetChallengeDetail: () => void;
  updateChallengeLike: (isLiked: boolean) => void;
}

export const useChallengeDetailStore = create<ChallengeDetailStore>((set) => ({
  challengeId: null,
  challengeInfo: null,
  dominance: null,
  myInfo: null,
  opponentInfo: null,
  thumbnail: null,
  myPhoto: null,
  opponentPhoto: null,
  challengeDetailWeeks: null,
  progressListMap: {},
  setChallengeId: (challengeId) => set({ challengeId: challengeId }),
  setChallengeInfo: (challengeInfo) => set({ challengeInfo: challengeInfo }),
  setDominance: (dominance) => set({ dominance: dominance }),
  setMyInfo: (myInfo) => set({ myInfo: myInfo }),
  setOpponentInfo: (opponentInfo) => set({ opponentInfo: opponentInfo }),
  setThumbnail: (thumbnail) => set({ thumbnail: thumbnail }),
  setMyPhoto: (myPhoto) => set({ myPhoto: myPhoto }),
  setOpponentPhoto: (opponentPhoto) => set({ opponentPhoto: opponentPhoto }),
  setChallengeDetailWeeks: (weeks) => {
    const progressListMap: Record<number, ProgressList> = {};
    weeks.progressList.forEach((progress) => {
      progressListMap[progress.weekNumber] = progress;
    });
    set({ challengeDetailWeeks: weeks, progressListMap });
  },
  resetChallengeDetail: () => set({
    challengeId: null,
    challengeInfo: null,
    dominance: null,
    myInfo: null,
    opponentInfo: null,
    thumbnail: null,
    myPhoto: null,
    opponentPhoto: null,
    challengeDetailWeeks: null,
    progressListMap: {},
  }),
  updateChallengeLike: (isLiked) => set((state) => {
    if (!state.challengeInfo) return state;
    return {
      challengeInfo: {
        ...state.challengeInfo,
        isLiked,
        likedCount: isLiked ? state.challengeInfo.likedCount + 1 : Math.max(0, state.challengeInfo.likedCount - 1),
      },
    };
  }),
}));