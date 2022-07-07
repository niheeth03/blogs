import Home from "./pages/Home/Home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
    const {user} = useContext(Context);

  return ( 
    <Router>
    <TopBar />
    <Routes>
        <Route path='/' element={user?<Home/>:<Register/>} />
        <Route path='/Write' element={user?<Write/>:<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/settings' element={user?<Settings/>:<Register/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/post/:postId' element={<Single/>} />

      </Routes>
  </Router>
   
  );
}

export default App;