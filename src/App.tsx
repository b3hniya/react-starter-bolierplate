import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@/presentation/Dashboard/pages/MainPage";
import Test from "@/pages/Test.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
