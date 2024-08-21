import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체상품을 볼 수있다.
// 3. 로그인 버튼을 클릭하면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우 로그인페이지 열림
// 5. 로그인이 되어있을 경우에는 상품디테일 페이지 열림
// 6. 로그아웃 버튼을 클릭하면 로그아웃
// 7. 로그아웃하면 상품디테일 접근불가, 로그인페이지로
// 8. 로그인을하면 로그아웃, 로그아웃을하면 로그인
// 9. 상품을 검색할 수 있다.
function App() {
  return (
    <div className="Container">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
