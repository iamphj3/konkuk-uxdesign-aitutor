import { BrowserRouter, Route, Routes } from "react-router-dom";

import AiTutorPage from "./pages/AiTutorPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aitutor" element={<AiTutorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
