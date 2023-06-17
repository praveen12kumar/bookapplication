
import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from './page/Home';
import Search from './page/Search';
function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/search' element={<Search />}/>
      </Routes>

    </div>
  );
}

export default App;
