import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import { Login } from "./pages/login/Login"
import Home from "./pages/home/Home"
import { Join } from "./pages/join/Join"
import Mypage from "./pages/mypage/Mypage"
import Community from "./pages/community/Community"
import Challenge from "./pages/challenge/Challenge"
import Search from "./pages/search/Search"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./config/queryClient"
import ChallengeVSMain from "./pages/challenge/challengeVS/ChallengeVS"
import ChallengeVSMatch from "./pages/challenge/challengeVS/ChallengeVSDetail"
import ChallengeVSSolo from "./pages/challenge/challengeSolo/ChallengeVSSolo"
import QnA from "./pages/community/qna/QnA"
import Review from "./pages/community/review/Review";
import MyPost from "./pages/mypage/myPost/MyPost";
import MyLiked from "./pages/mypage/myLiked/MyLiked";
import ChallengeRecruit from "./pages/challenge/challengeRecruit/ChallengeRecruit";
import Profile from "./pages/mypage/profile/Profile";
import MySettings from "./pages/mypage/mySetting/MySettings"
import ChallengeVSSoloDetail from "./pages/challenge/challengeSolo/ChallengeVSSoloDetail"
import FieldVS from "./pages/fieldVS/FieldVS"
import ChallengeVSInvite from "./pages/challenge/challengeVS/ChallengeVSInvite"
import ChallengeRecruitWrite from "./pages/challenge/challengeRecruit/ChallengeRecruitWrite"
import CreateChallenge from "./pages/challenge/CreateChallenge"
import EditChallenge from "./pages/challenge/EditChallenge"
import WriteReview from "./pages/community/review/WriteReview"
import WriteQnA from "./pages/community/qna/WriteQnA"
import EditMyPost from "./pages/mypage/myPost/EditMyPost"
import ChallengeRecruitDetail from "./pages/challenge/challengeRecruit/ChallengeRecruitDetail"
import QnADetail from "./pages/community/qna/QnADetail"

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={PageEndPoints.HOME} element={<Home />} />
          <Route path={PageEndPoints.FIELD_VS} element={<FieldVS />} />
          <Route path={PageEndPoints.MYPAGE} element={<Mypage />} />
          <Route path={PageEndPoints.PROFILE} element={<Profile />} />
          <Route path={PageEndPoints.MYPOST} element={<MyPost />} />
          <Route path={PageEndPoints.MYPOST_EDIT} element={<EditMyPost />} />
          <Route path={PageEndPoints.MYLIKED} element={<MyLiked />} />
          <Route path={PageEndPoints.MYSETTINGS} element={<MySettings />} />
          <Route path={PageEndPoints.COMMUNITY} element={<Community />} />
          <Route path={PageEndPoints.REVIEW_WRITE} element={<WriteReview />} />
          <Route path={PageEndPoints.QNA} element={<QnA />} />
          <Route path={PageEndPoints.QNA_WRITE} element={<WriteQnA />} />
          <Route path={PageEndPoints.QNA_DETAIL} element={<QnADetail />} />
          <Route path={PageEndPoints.REVIEW} element={<Review />} />
          <Route path={PageEndPoints.CHALLENGE_MAIN} element={<Challenge />} />
          <Route path={PageEndPoints.CHALLENGE_CREATE} element={<CreateChallenge />} />
          <Route path={PageEndPoints.CHALLENGE_EDIT} element={<EditChallenge />} />
          <Route path={PageEndPoints.CHALLENGE_VS} element={<ChallengeVSMain />} />
          <Route path={PageEndPoints.CHALLENGE_VS_DETAIL} element={<ChallengeVSMatch />} />
          <Route path={PageEndPoints.CHALLENGE_VS_INVITE} element={<ChallengeVSInvite />} />
          <Route path={PageEndPoints.CHALLENGE_SOLO} element={<ChallengeVSSolo />} />
          <Route path={PageEndPoints.CHALLENGE_SOLO_DETAIL} element={<ChallengeVSSoloDetail />} />
          <Route path={PageEndPoints.CHALLENGE_RECRUIT} element={<ChallengeRecruit />} />
          <Route path={PageEndPoints.CHALLENGE_RECRUIT_DETAIL} element={<ChallengeRecruitDetail />} />
          <Route path={PageEndPoints.CHALLENGE_RECRUIT_WRITE} element={<ChallengeRecruitWrite />} />
          <Route path={PageEndPoints.LOGIN} element={<Login />} />
          <Route path={PageEndPoints.JOIN} element={<Join />} />
          <Route path={PageEndPoints.SEARCH} element={<Search />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
