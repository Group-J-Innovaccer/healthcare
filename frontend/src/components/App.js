import Home from './Home';
import About from './About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
