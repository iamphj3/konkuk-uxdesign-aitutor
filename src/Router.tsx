import { BrowserRouter, Route, Routes } from "react-router-dom";

import AiTutorPage from "./pages/AiTutorPage";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import QuestionPage from "./pages/QuestionPage";
import SuggestionPage from "./pages/SuggestionPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aitutor" element={<AiTutorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/suggestion" element={<SuggestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
