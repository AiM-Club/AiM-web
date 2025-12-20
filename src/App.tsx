import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import { Login } from "./pages/login/Login"
import Home from "./pages/home/Home"
import { Join } from "./pages/join/Join"
import Mypage from "./pages/mypage/Mypage"
import Community from "./pages/community/Community"
import Challenge from "./pages/challenge/Challenge"
import Search from "./pages/search/Search"
import ChallengeVSMain from "./pages/challenge/challengeVS/ChallengeVSMain"
import ChallengeVSSolo from "./pages/challenge/challengeSolo/ChallengeVSSolo"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageEndPoints.HOME} element={<Home />} />
        <Route path={PageEndPoints.MYPAGE} element={<Mypage />} />
        <Route path={PageEndPoints.COMMUNITY} element={<Community />} />
        <Route path={PageEndPoints.CHALLENGE_MAIN} element={<Challenge />} />
        <Route path={PageEndPoints.CHALLENGE_VS} element={<ChallengeVSMain />} />
        <Route path={PageEndPoints.CHALLENGE_SOLO} element={<ChallengeVSSolo />} />
        <Route path={PageEndPoints.LOGIN} element={<Login />} />
        <Route path={PageEndPoints.JOIN} element={<Join />} />
        <Route path={PageEndPoints.SEARCH} element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
