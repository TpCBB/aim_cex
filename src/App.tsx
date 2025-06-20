import GameGroup from "./board/index"
import Todo from "./todo/index" 
import Nav from "./nav/nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
  function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/game" element={<GameGroup />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
