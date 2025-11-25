import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageEndPoints } from "./constants/endpoints"
import Home from "./pages/home/Home"
import Mypage from "./pages/mypage/Mypage"
import Community from "./pages/community/Community"
import Challenge from "./pages/challenge/Challenge"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageEndPoints.HOME} element={<Home />}/>
        <Route path={PageEndPoints.MYPAGE} element={<Mypage />}/>
        <Route path={PageEndPoints.COMMUNITY} element={<Community />}/>
        <Route path={PageEndPoints.CHALLENGE_MAIN} element={<Challenge />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
