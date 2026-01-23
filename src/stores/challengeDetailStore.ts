import type { ChallengeInfo, Dominance, ParticipantsInfo } from "@/types/challengeDetail";
import { create } from "zustand";

interface ChallengeDetailStore {
  challengeInfo: ChallengeInfo | null;
  dominance: Dominance | null;
  myInfo: ParticipantsInfo | null;
  opponentInfo: ParticipantsInfo | null;
  thumbnail: Blob | null;
  myPhoto: Blob | null;
  opponentPhoto: Blob | null;
  setChallengeInfo: (challengeInfo: ChallengeInfo) => void;
  setDominance: (dominance: Dominance) => void;
  setMyInfo: (myInfo: ParticipantsInfo) => void;
  setOpponentInfo: (opponentInfo: ParticipantsInfo | null) => void;
  setThumbnail: (thumbnail: Blob | null) => void;
  setMyPhoto: (myPhoto: Blob | null) => void;
  setOpponentPhoto: (opponentPhoto: Blob | null) => void;
}

export const useChallengeDetailStore = create<ChallengeDetailStore>((set) => ({
  challengeInfo: null,
  dominance: null,
  myInfo: null,
  opponentInfo: null,
  thumbnail: null,
  myPhoto: null,
  opponentPhoto: null,
  setChallengeInfo: (challengeInfo) => set({ challengeInfo: challengeInfo }),
  setDominance: (dominance) => set({ dominance: dominance }),
  setMyInfo: (myInfo) => set({ myInfo: myInfo }),
  setOpponentInfo: (opponentInfo) => set({ opponentInfo: opponentInfo }),
  setThumbnail: (thumbnail) => set({ thumbnail: thumbnail }),
  setMyPhoto: (myPhoto) => set({ myPhoto: myPhoto }),
  setOpponentPhoto: (opponentPhoto) => set({ opponentPhoto: opponentPhoto }),
}));