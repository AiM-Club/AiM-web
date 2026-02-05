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
  progressMyListMap: Record<number, ProgressList>;
  progressOpponentListMap: Record<number, ProgressList>;
  isMine: boolean;
  isWriter: boolean;
  setChallengeInfo: (challengeInfo: ChallengeInfo) => void;
  setChallengeId: (challengeId: number | null) => void;
  setDominance: (dominance: Dominance) => void;
  setMyInfo: (myInfo: ParticipantsInfo) => void;
  setOpponentInfo: (opponentInfo: ParticipantsInfo | null) => void;
  setThumbnail: (thumbnail: Blob | null) => void;
  setMyPhoto: (myPhoto: Blob | null) => void;
  setOpponentPhoto: (opponentPhoto: Blob | null) => void;
  setChallengeMyDetailWeeks: (weeks: ChallengeDetailWeeksResponse) => void;
  setChallengeOpponentDetailWeeks: (weeks: ChallengeDetailWeeksResponse) => void;
  setIsMine: (isMine: boolean) => void;
  setIsWriter: (isWriter: boolean) => void;
  resetChallengeDetail: () => void;
  updateChallengeLike: (isLiked: boolean) => void;
  updateTimer: (weekNumber: number, stopwatchTimeSeconds: number, isMy: boolean) => void;
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
  progressMyListMap: {},
  progressOpponentListMap: {},
  isMine: false,
  isWriter: false,
  setChallengeId: (challengeId) => set({ challengeId: challengeId }),
  setChallengeInfo: (challengeInfo) => set({ challengeInfo: challengeInfo }),
  setDominance: (dominance) => set({ dominance: dominance }),
  setMyInfo: (myInfo) => set({ myInfo: myInfo }),
  setOpponentInfo: (opponentInfo) => set({ opponentInfo: opponentInfo }),
  setThumbnail: (thumbnail) => set({ thumbnail: thumbnail }),
  setMyPhoto: (myPhoto) => set({ myPhoto: myPhoto }),
  setOpponentPhoto: (opponentPhoto) => set({ opponentPhoto: opponentPhoto }),
  setIsMine: (isMine) => set({ isMine: isMine }),
  setIsWriter: (isWriter) => set({ isWriter: isWriter }),
  setChallengeMyDetailWeeks: (weeks) => {
    const progressMyListMap: Record<number, ProgressList> = {};
    weeks.progressList.forEach((progress) => {
      progressMyListMap[progress.weekNumber] = progress;
    });
    set({ challengeDetailWeeks: weeks, progressMyListMap });
  },
  setChallengeOpponentDetailWeeks: (weeks) => {
    const progressOpponentListMap: Record<number, ProgressList> = {};
    weeks.progressList.forEach((progress) => {
      progressOpponentListMap[progress.weekNumber] = progress;
    });
    set({ challengeDetailWeeks: weeks, progressOpponentListMap });
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
    progressMyListMap: {},
    progressOpponentListMap: {},
    isMine: false,
    isWriter: false,
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
  updateTimer: (weekNumber, stopwatchTimeSeconds, isMy) => set((state) => {
    const targetMap = isMy ? state.progressMyListMap : state.progressOpponentListMap;
    const progress = targetMap[weekNumber];
    if (progress) {
      const updatedProgress = {
        ...progress,
        stopwatchTimeSeconds,
      };
      const updatedMap = {
        ...targetMap,
        [weekNumber]: updatedProgress,
      };
      return isMy
        ? { progressMyListMap: updatedMap }
        : { progressOpponentListMap: updatedMap };
    }
    return state;
  }),
}));