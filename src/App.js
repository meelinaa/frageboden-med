import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionaires from './Questionaires/Questionaires';
import Questions from './Questions/Questions';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="questionnaires/:id" element={<Questionaires />} />
          <Route path='questionnaires/:id/questions' element={<Questions/>} />
          <Route path='questionnaires/:id/questions/evaluation' element={<Questions/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
