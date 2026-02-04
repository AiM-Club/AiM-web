import * as S from "./Banner.style";
import Heart from "@/assets/Heart.svg";
import HeartFill from "@/assets/ClickedHeart.svg";
import { useState, useEffect } from "react";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import { useChallengeLike } from "@/api/challengeDetail";
import { usePostDetailStore } from "@/stores/PostDetailStore";
import { usePostPostLike } from "@/api/posts";
import { useAuthStore } from "@/stores/authStore";

interface BannerProps {
  isWriter?: boolean;
  type?: "challenge" | "recruit";
}

const Banner = ({ isWriter = false, type = "challenge" }: BannerProps) => {
  const { challengeInfo, thumbnail, myInfo, challengeId, updateChallengeLike } = useChallengeDetailStore();
  const { postInfo, thumbnail: postThumbnail, updatePostLike } = usePostDetailStore();
  const { mutate: challengeLike } = useChallengeLike(String(challengeId ?? "0"));
  const { mutate: postLike } = usePostPostLike(String(postInfo?.challengeId ?? "0"));
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(challengeInfo?.isLiked ?? false);
  const { user } = useAuthStore();
  const image = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif"
  const thumbnailUrl = type === "challenge" ? useUserPhotoUrl(thumbnail) || image : useUserPhotoUrl(postThumbnail) || image;

  useEffect(() => {
    if (challengeInfo?.isLiked !== undefined) {
      setIsHeartClicked(challengeInfo.isLiked);
    }
    if (postInfo?.isLiked !== undefined) {
      setIsHeartClicked(postInfo.isLiked);
    }
  }, [challengeInfo?.isLiked, postInfo?.isLiked]);

  const handleChallengeLike = () => {
    challengeLike(undefined, {
      onSuccess: (response) => {
        console.log(response);
        const isLiked = response.data.likes;
        setIsHeartClicked(isLiked);
        updateChallengeLike(isLiked);
      }
    });
  }

  const handlePostLike = () => {
    postLike(undefined, {
      onSuccess: (response) => {
        console.log(response);
        const isLiked = response.data.isLiked;
        setIsHeartClicked(isLiked);
        updatePostLike(isLiked);
      }
    });
  }
  return (
    <S.BannerWrapper>
      <S.BannerImage src={thumbnailUrl} />
      <S.BannerOverlay />
      <S.BannerContentWrapper>
        <S.BannerContent>{type === "challenge" ? challengeInfo?.name : postInfo?.title}</S.BannerContent>
        {!isWriter &&
          <S.WriterWrapper>
            <p>{myInfo?.nickname}</p>
            {user && <S.HeartWrapper>
              <img src={isHeartClicked ? HeartFill : Heart} onClick={type === "challenge" ? handleChallengeLike : handlePostLike} />
              <p>{type === "challenge" ? challengeInfo?.likedCount : postInfo?.likeCount}</p>
            </S.HeartWrapper>}
          </S.WriterWrapper>
        }
      </S.BannerContentWrapper>
    </S.BannerWrapper>
  )
}

export default Banner;