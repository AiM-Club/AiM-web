import type { ChallengeInfo, Dominance, ParticipantsInfo, ChallengeDetailWeeksResponse, ProgressList } from "@/types/challengeDetail";
import type { Comment } from "@/types/comment";
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
  commentListMap: Record<number, Comment[]>;
  setChallengeInfo: (challengeInfo: ChallengeInfo) => void;
  setChallengeId: (challengeId: number | null) => void;
  setDominance: (dominance: Dominance) => void;
  setMyInfo: (myInfo: ParticipantsInfo) => void;
  setOpponentInfo: (opponentInfo: ParticipantsInfo | null) => void;
  setThumbnail: (thumbnail: Blob | null) => void;
  setMyPhoto: (myPhoto: Blob | null) => void;
  setOpponentPhoto: (opponentPhoto: Blob | null) => void;
  setChallengeDetailWeeks: (weeks: ChallengeDetailWeeksResponse) => void;
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
  commentListMap: {},
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
    const commentListMap: Record<number, Comment[]> = {};
    weeks.progressList.forEach((progress) => {
      progressListMap[progress.weekNumber] = progress;
      commentListMap[progress.weekNumber] = [];
    });
    set({ challengeDetailWeeks: weeks, progressListMap, commentListMap });
  },
}));