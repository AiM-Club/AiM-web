import type { PostCommentResponse, PostDetailResponse } from "@/types/posts";
import { create } from "zustand";


interface PostDetailStore {
    thumbnail: Blob | null;
    postInfo: PostDetailResponse | null;
    postComments: PostCommentResponse | null;
    isMine: boolean;
    setIsMine: (isMine: boolean) => void;
    setThumbnail: (thumbnail: Blob | null) => void;
    setPostInfo: (postInfo: PostDetailResponse | null) => void;
    setPostComments: (postComments: PostCommentResponse | null) => void;
    resetPostDetail: () => void;
    updatePostLike: (isLiked: boolean) => void;
}

export const usePostDetailStore = create<PostDetailStore>((set) => ({
    thumbnail: null,
    postInfo: null,
    postComments: null,
    isMine: false,
    setIsMine: (isMine) => set({ isMine: isMine }),
    setThumbnail: (thumbnail) => set({ thumbnail: thumbnail }),
    setPostInfo: (postInfo) => set({ postInfo: postInfo }),
    setPostComments: (postComments) => set({ postComments: postComments }),
    resetPostDetail: () => set({
        thumbnail: null,
        postInfo: null,
        postComments: null,
        isMine: false,
    }),
    updatePostLike: (isLiked: boolean) => set((state) => {
        if (!state.postInfo) return state;
        return {
            postInfo: {
                ...state.postInfo,
                isLiked,
                likeCount: isLiked ? state.postInfo.likeCount + 1 : Math.max(0, state.postInfo.likeCount - 1),
            },
        };
    }),
}));