import type { ChallengeRecruitDetailResponse, PostCommentResponse } from "@/types/posts";
import { create } from "zustand";


interface RecruitDetailStore {
    thumbnail: Blob | null;
    recruitInfo: ChallengeRecruitDetailResponse | null;
    postComments: PostCommentResponse | null;
    setThumbnail: (thumbnail: Blob | null) => void;
    setRecruitInfo: (recruitInfo: ChallengeRecruitDetailResponse | null) => void;
    setPostComments: (postComments: PostCommentResponse | null) => void;
}

export const useRecruitDetailStore = create<RecruitDetailStore>((set) => ({
    thumbnail: null,
    recruitInfo: null,
    postComments: null,
    setThumbnail: (thumbnail) => set({ thumbnail: thumbnail }),
    setRecruitInfo: (recruitInfo) => set({ recruitInfo: recruitInfo }),
    setPostComments: (postComments) => set({ postComments: postComments }),
}));