import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieEdit from "./pages/movieEdit/MovieEdit";
import MovieAdd from "./pages/movieAdd/MovieAdd";
import { Toaster } from "react-hot-toast";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/movie/:id/edit" element={<MovieEdit />} />
            <Route path="/movie/:id/add" element={<MovieAdd />} />
            <Route path="/search" element={<SearchPage/>} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
