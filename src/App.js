import Hero from "./components/landing page/hero section/Hero";
import Display from "./components/browse/Display";
import {Routes, Route} from "react-router-dom"
import DetailDisplay from "./components/browse/movie list/movie details/DetailDisplay";



function App() {
  return (
    <div>  
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/movies" element={<Display />} />
        <Route path="/movies/movie-details" element={<DetailDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
